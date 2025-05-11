import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            src={"/images/logo_black.png"}
            width={50}
            height={50}
            alt="logo"
          />

          <nav>
            <ul>
              <li>
                <Link passHref href="/">
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link passHref href="/events">
                  Events
                </Link>
              </li>
              <li>
                <Link passHref href="/about-us">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Events all over the world</p>
      </div>
    </header>
  );
};
