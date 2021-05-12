import React, { Component } from 'react'
import {storeProducts , detailProduct} from './data'
const ProductContext=React.createContext();
 class ProductProvider extends Component {
     state={
         // use this tp get copy values
         // (products:storeProducts,)
         //use to get original values back from data 
         products:[],
         detailProduct:detailProduct ,
         model:false,
         cart:[],
         modelProduct:detailProduct,
         Tex:20,
         Subtotal:10,
         Total:30
     };

     componentDidMount=()=>{
         this.setProducts();
     }
     setProducts=()=>{
         let tempproducts=[];
         storeProducts.forEach(product=>{
            const  singleproduct={...product};
            tempproducts=[...tempproducts,singleproduct]
         });
         this.setState(()=>{
             return {products:tempproducts}
         })

         
         
     };
     OpenModelHandler=id=>{
        const product=this.getitemHandler(id);
        this.setState(()=>{
            return {modelProduct:product, model:true}
        })}
     

     CloseModelHandler=()=>{
        this.setState(()=>{
            return {model:false}
        })}

     getitemHandler=id=>{
         const product=this.state.products.find(item=>item.id===id);
         return product;
     }
     detailHandler=id=>{
        const product=this.getitemHandler(id);
        this.setState(()=>{
            return {detailProduct:product}
        })
    };

    AddtoCartHandler=id=>{
        let productitem=[...this.state.products];
        const index=productitem.indexOf(this.getitemHandler(id));
        const product=productitem[index];
        product.inCart=true;
        product.total=product.total + product.price;
        product.count=product.count+1;
        this.setState(()=>{
            return{products:productitem , cart:[...this.state.cart,product]}
        },()=>{this.addTotalHandler()})
        
    }
    //functions for cart
    IncrementHandler=(id)=>{
        let tempcart=[...this.state.cart];
        const selectedproduct=tempcart.find(item=>item.id===id);
        const index=tempcart.indexOf(selectedproduct);
        const product=tempcart[index];
        product.count=product.count+1;
        product.total=product.count*product.price;
        this.setState(()=>{
            return{cart:[...tempcart]}
        },()=>{
            this.addTotalHandler()
        })
    }
    DescrementHandler=(id)=>{
        let tempcart=[...this.state.cart];
        const selectedproduct=tempcart.find(item=>item.id===id);
        const index=tempcart.indexOf(selectedproduct);
        const product=tempcart[index];
        product.count=product.count-1;
        if(product.count===0){
            this.RemoveItemHandler(id);
        }
        else{
        product.total=product.count*product.price;
        this.setState(()=>{
            return{cart:[...tempcart]}
        },()=>{
            this.addTotalHandler()
        })
    }}
    RemoveItemHandler=(id)=>{
        let tempproducts=[...this.state.products];
        let tempcart=[...this.state.cart];
        tempcart=tempcart.filter(item=>item.id!==id);
        const index=tempproducts.indexOf(this.getitemHandler(id));
        const removeproduct=tempproducts[index];
        removeproduct.inCart=false;
        removeproduct.total=0;
        removeproduct.count=0;
        this.setState(()=>{
            return{cart:[...tempcart],
            products:[...tempproducts]}
        },()=>{
            this.addTotalHandler();
        })

    }
    clearcart=()=>{
        this.setState(()=>{
            return{cart:[]}
        })
        this.setProducts();
        this.addTotalHandler();
    }
    addTotalHandler=()=>{
        let subtotal=0;
        this.state.cart.map(item=>( subtotal+=item.total));
        
        const temptex=subtotal*0.1;
        const tax=parseFloat(temptex.toFixed(2));
        const total=subtotal+tax;
        this.setState(()=>{
            return {Subtotal:subtotal,Total:total,Tex:tax}
        })
    }
    render() {
      
        return (
            <ProductContext.Provider value={{
            ...this.state,
                detail:this.detailHandler,
                addtocart:this.AddtoCartHandler,
                openModel:this.OpenModelHandler,
                closeModel:this.CloseModelHandler,
                increment:this.IncrementHandler,
                decrement:this.DescrementHandler,
                removeitem:this.RemoveItemHandler,
                clearcart:this.clearcart

        }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer;

export  {ProductProvider,ProductConsumer};