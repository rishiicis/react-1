// const MyComponent = (prop)=>{
//     return(
//         <div>
//             <h1 className={prop.className}>Hello</h1>
//             {prop.children}
//         </div>
//     )
// }

// const Hoc = (MyComponent)=>{
//     return(prop)=>{
//         return(
//             <MyComponent {...prop} className="bg-gray-200">
//                 <span>Flag</span>
//             </MyComponent>
//         )
//     }
// }
// const UpdatedComponent = Hoc(MyComponent);
//export default UpdatedComponent;



const OrginalComponent = (props)=>{
    return(
        <h1 style={props.style}>Hello {props.name}</h1>
    )
}
const HocComponent = (OrginalComponent)=>{
    return(props)=>{
        return (
            <OrginalComponent {...props} name="HOC!" style={{color:"red"}}/>
        )
    }
}

const HOCupdateCompnt = HocComponent(OrginalComponent);
export default HOCupdateCompnt;

