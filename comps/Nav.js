import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/dolphin.svg' width={64} height={64} />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/contacts'><a>Contacts</a></Link>
        </nav>
    );
}

export default Navbar;