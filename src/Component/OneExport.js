function Demo()
{
    return(
        <div>
            Enter Email:<input type="email"></input>
        </div>
    )
}

function OneExport()
{
    return(
        <div>
            <Demo/>
            <br></br>
            GENDER:<input type="radio" id="Male" name="Gender" value="Male"></input>MALE
            <input type="radio" id="Female" name="Gender" value="Female"></input>FEMALE
        </div>
    )
}

export default OneExport;