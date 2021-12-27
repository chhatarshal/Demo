 import Image from 'next/Image';
import Router from 'next/router';

 const Header = () => {

    return (
        <div className="flex justify-between py-4 px-2  lg:w-full h-40">
            <div onClick={() => {Router.push('/')}}>
                <Image src="/quarklogo.png"
                width={50} height={50} 
                alt='logo' />
            </div>
            <div>User</div>
        </div>
    )
}

export default Header
