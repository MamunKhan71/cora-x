"use client"
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { useState } from "react"

export function NavbarMenu() {
    const navItems = [
        {
            name: "Features",
            link: "#features",
        },
        {
            name: "Solutions",
            link: "#solutions",
        },
        {
            name: "Pricing",
            link: "#pricing",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                    <NavbarButton variant="secondary">Login</NavbarButton>
                    {/* <NavbarButton variant="gradient">Get Started</NavbarButton> */}
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </MobileNavHeader>

                <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-zinc-300 hover:text-white"
                        >
                            <span className="block py-2">{item.name}</span>
                        </a>
                    ))}
                    <div className="mt-4 flex w-full flex-col gap-4">
                        <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="secondary" className="w-full">
                            Login
                        </NavbarButton>
                        <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="gradient" className="w-full">
                            Get Started
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    )
}
