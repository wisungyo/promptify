"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true

    const [provider, setProvider] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    const signIn = () => {
        console.log('sign in')
    }

    const signOut = () => {
        console.log('sign out')
    }

    useEffect(() => {
        // const setProvider = async () => {
        //     const response = await getProviders()
        //     setProvider(response)
        // }

        // setProvider()
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href={"/"} className="flex gap-2 flex-center">
                <Image
                    src={"/assets/images/logo.svg"}
                    alt="Promptify Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text">Promptify</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href={"/create-prompt"} className="black_btn">
                            Create Post
                        </Link>

                        <button type="button" onClick={signOut} className="outline_btn">
                            Sign Out
                        </button>

                        <Link href={"/profile"}>
                            <Image
                                src={"/assets/images/wisungyo-logo.png"}
                                alt="profile"
                                width={37}
                                height={37}
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {provider &&
                            Object.values(provider).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))
                        }
                    </>
                )}

            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative">
                {isUserLoggedIn ? (
                    <>
                        <div className="flex">
                            <Image
                                src={"/assets/images/wisungyo-logo.png"}
                                alt="Profile"
                                width={37}
                                height={37}
                                className="rounded-full"
                                onClick={() => setToggleDropdown((prev) => !prev)}
                            />
                        </div>

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href={"/profile"}
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href={"/create-prompt"}
                                    className="dropdown_link"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    href={"/"}
                                    className="black_btn mt-5 w-full"
                                    onClick={() => {
                                        setToggleDropdown(false)
                                        signOut()
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {provider &&
                            Object.values(provider).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))
                        }
                    </>
                )}

            </div>
        </nav>
    )
}

export default Nav