import React,{Component} from "react";




export default class Book extends Component{

    state={books:[
        {id:'001',img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",title:"book1", description:"book1description",done:true},
        {id:'002',img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",title:"book2", description:"book2description",done:true},
        {id:'003',img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",title:"book3", description:"book3description",done:true}
    ]}

    render (){
        // const {id,img,title,done,description} =this.state
        return (
            <div className="book_container">

             </div>
        )
        }
}