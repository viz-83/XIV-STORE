import {sql} from "../config/db.js"

export const getProducts= async(req,res)=>{
    try{
        const products=await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;
        console.log("Fetched products", products)
        res.status(200).json({success:true,data:products})
    }catch(err){
        console.log("Error in getProducts",err)
        res.status(500).json({success:false,message:"Server Error"})
    }
}

export const createProduct= async(req,res)=>{
    const {name,price,image}=req.body

    if(!name || !price || !image){
        return res.status(400).json({success:false,message:"Please fill all fields"})
    }
    try{
        const newProduct = await sql`
        INSERT INTO products(name,price,image)
        VALUES (${name},${price},${image})
        RETURNING *
        `
        console.log("new product added:",newProduct)
        res.status(201).json({success:true,data:newProduct[0]})
    }
    catch(err){
        console.log("Error in createProducts",err)
        res.status(500).json({success:false,message:"Server Error"})
    }
}

export const getProduct= async(req,res)=>{
    const{ id }=req.params

    try{
        const product=await sql`
        SELECT *FROM products
        WHERE id=${id}
        `
        console.log("Fetched product:",product)
        res.status(200).json({success:true,data:product[0]})
    }catch(e){
        console.log("Error in getProduct",e)
        res.status(500).json({success:false,message:"Server Error"})
    }
}

export const updateProduct= async(req,res)=>{
    const { id }=req.params;
    const {name,price,image}=req.body;

    try{
        const updatedProduct=await sql`
        UPDATE products 
        SET name=${name}, price=${price}, image=${image}
        WHERE id=${id}
        RETURNING *
        `
        if(updatedProduct.count==0){
            return res.status(404).json({
                success:false,
                message:"Product not found"})
        }

        console.log("Updated product:",updatedProduct)
        res.status(200).json({success:true,data:updatedProduct[0]})

    }catch(e){
        console.log("Error in updateProduct",e)
        res.status(500).json({success:false,message:"Server Error"})
    }

}

export const deleteProduct= async(req,res)=>{
    const { id }=req.params;

    try{
        const deletedProduct=await sql`
        DELETE FROM products
        WHERE id=${id}
        RETURNING *
        `
        if(deletedProduct.count==0){
            return res.status(404).json({
                success:false,
                message:"Product not found"})
        }

        res.status(200).json({success:true,data:deletedProduct[0]})
    }catch(e){
        console.log("Error in deleteProduct",e)
        res.status(500).json({success:false,message:"Server Error"})
    }
}

