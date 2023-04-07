



function CreateApartment() {

    <form action={`${process.env.REACT_APP_APIURL}/apartments`} method="POST" >
        <label >Title:
            <input type="text" />
        </label>



    </form >


}


export default CreateApartment;