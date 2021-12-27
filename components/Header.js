import Router from 'next/router';

 const Header = () => {

    return (
        <div className="flex justify-between py-4 px-2  lg:w-full h-40">
            <div onClick={() => {Router.push('/')}}>
               LOGO
            </div>
            <div>User</div>
        </div>
    )
}

export default Header
