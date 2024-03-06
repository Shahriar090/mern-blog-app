import { Footer, FooterDivider, FooterIcon } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="logo mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-2xl font-semibold dark:text-white"
            >
              <span className="px-3 py-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Shahriar's
              </span>
              Blog
            </Link>
          </div>
          <div className="footer-content grid grid-cols-2 gap-8 mt-5 sm:grid-cols-3">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://shahriar-hossain.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-blue-600">
                    {" "}
                    Visit Shahriar's Portfolio Website
                  </span>
                </Footer.Link>
              </Footer.LinkGroup>
              {/* github link */}
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Shahriar090"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-blue-600">
                    {" "}
                    Visit Shahriar's Github
                  </span>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://shahriar-hossain.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-blue-600">
                    {" "}
                    Visit Shahriar's Portfolio Website
                  </span>
                </Footer.Link>
              </Footer.LinkGroup>
              {/* github link */}
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Shahriar090"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-blue-600">
                    {" "}
                    Visit Shahriar's Github
                  </span>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legals" />
              <Footer.LinkGroup col>
                <Footer.Link>Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
              {/* github link */}
              <Footer.LinkGroup col>
                <Footer.Link>Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Shahriar's Blog"
            year={new Date().getFullYear()}
          />
          <div className="icons flex gap-5 sm:mt-0 mt-4 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
