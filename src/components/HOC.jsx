const OrginalComp = ({name, style})=>{
    return (
            <li style={style}>{name}</li>
    )
}

const HOC = (OrginalComp)=>{
    return (props)=>{
        return(
            <>
                <OrginalComp {...props} style={{color: 'red'}}/>
            </>
        )
    }
}
const UpdateComponent = HOC(OrginalComp);

const ConditionalComp = ()=>{
    const fruits = ['Apple', 'Banana', 'Orange', 'Papaya']
    return(
        <ul>
            {fruits.map((item, index)=> index % 2 === 0
            ?
            <UpdateComponent name={item} key={index}/>
            :
            <OrginalComp name={item} key={index}/>
            )}
            <br/>
        </ul>
    )
}

export default ConditionalComp;