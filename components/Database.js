const Database = () => {

    const createdb = () => {
             console.log('Databas created ')
    }

    return (<>
            <div className="lg:flex md:flex lg:pl-40 h-30 md:pl-20 align-middle">
                <div className="m-10 h-3"> <input className="" type="text" placeholder="Qpp Version" ></input></div>
                <div className="m-10 h-3"> <input className="" type="text" placeholder="Database Name" ></input></div>
                <div className="m-10 h-3"> <input className="" type="text" placeholder="Password" ></input></div>
            </div>
          
            <div className="lg:flex md:flex lg:pl-40 h-30 md:pl-20 align-middle">
               
                <div className="m-10 h-2"> <button  label="Create DB" className="bg-blue-50 border-2 px-1" onClick={() => {createdb()}}>Create DB </button></div>
           </div>
            </>
    )
}

export default Database
