import {
    HomeIcon,
    ServerIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    MenuIcon,
        
} from '@heroicons/react/outline';
 

function SideBar(props) {
    return (
        <div className="text-gray-500 text-sm h-full">
            <div className="space-y-4">
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="h-10 w-10"/>
                    <p>Home</p>
                </button>                
                <button className="flex items-center space-x-2 hover:text-white">
                    <ServerIcon className="h-10 w-10"/>
                    <p>Servers </p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <PlusCircleIcon className="h-10 w-10"/>
                    <p>Add New Server</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <LibraryIcon className="h-10 w-10"/>
                    <p>Library</p>
                </button>   
                <hr className="border-t-[0.1px] border-gray-900" />   
               
                <button className="flex items-center space-x-2 hover:text-white">
                    <HeartIcon className="h-10 w-10"/>
                    <p>Favriot Server</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" /> 
            </div>
        </div>
    )
}

export default SideBar

