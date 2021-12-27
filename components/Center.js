import Router from "next/router";

const Center = () => {
    return (<>
            <div onClick={() => {Router.push('/Configservers')}} className="lg:flex md:flex lg:pl-40 h-60 md:pl-20 align-middle">
                <div className="py-4 border-2 h-full md:w-1/4 lg:w-1/4 p-4 ml-4 mr-4 bg-slate-600 text-white text-2xl text-center">
                <div className="mt-20">QPP Server</div> 
            </div>
            <div className="border-2 h-full md:w-1/4 lg:w-1/4 p-4 ml-4 mr-4 bg-slate-600 text-white text-2xl  text-center">
                <div className="mt-20">Workspace</div> 
            </div>
            <div  onClick={() => {Router.push('/createdb')}} className="border-2 h-full md:w-1/4 lg:w-1/4 p-4 ml-4 mr-4 bg-slate-600 text-white text-2xl text-center">
                <div className="mt-20">Database</div>
            </div>
            <div className="border-2 h-full md:w-1/4 lg:w-1/4 ml-4 mr-4 bg-slate-600 text-white text-2xl text-center">
                <div className="mt-20">QPP Next Gen</div>
            </div>
            </div>
            </>
    )
}

export default Center
