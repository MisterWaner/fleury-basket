import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";

export default function MainMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button size="icon" className="h-10 w-10">
                    <Menu className="h-10 w-10" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-slate-950 text-slate-50 font-monserrat">
                <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                </SheetHeader>
                <nav className="w-full mt-6 flex flex-col gap-4">
                    <a
                        href="/"
                        className="text-sm px-6 py-2 font-semibold uppercase hover:underline hover:underline-offset-4"
                        onClick={toggleMenu}
                    >
                        Accueil
                    </a>
                    <a
                        href="/actualites"
                        className="text-sm px-6 py-2 font-semibold uppercase hover:underline hover:underline-offset-4"
                        onClick={toggleMenu}
                    >
                        Actualités
                    </a>
                    <a
                        href="/equipes"
                        className="text-sm px-6 py-2 font-semibold uppercase hover:underline hover:underline-offset-4"
                        onClick={toggleMenu}
                    >
                        Équipes
                    </a>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-2/3 text-sm px-3 py-2 font-medium"
                    >
                        <AccordionItem value="club">
                            <AccordionTrigger className="menu-section-title">
                                Club
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                <a
                                    href="/club/a-propos"
                                    onClick={toggleMenu}
                                    className="menu-link"
                                >
                                    À propos
                                </a>
                                <a
                                    href="/club/organigramme"
                                    onClick={toggleMenu}
                                    className="menu-link"
                                >
                                    Organigramme
                                </a>
                                <a
                                    href="/club/partenaires"
                                    onClick={toggleMenu}
                                    className="menu-link"
                                >
                                    Partenaires
                                </a>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Accordion
                        type="single"
                        collapsible
                        className="w-2/3 text-sm px-3 py-2 font-medium "
                    >
                        <AccordionItem value="contact">
                            <AccordionTrigger className="menu-section-title">
                                Contactez-nous
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                <a
                                    href="/contact"
                                    onClick={toggleMenu}
                                    className="menu-link"
                                >
                                    Contact
                                </a>
                                <a
                                    href="/inscription"
                                    onClick={toggleMenu}
                                    className="menu-link"
                                >
                                    Inscription
                                </a>
                                <a
                                    href="/faq"
                                    onClick={toggleMenu}
                                    className="menu-link"
                                >
                                    FAQ
                                </a>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </nav>
            </SheetContent>
        </Sheet>
    );
}

