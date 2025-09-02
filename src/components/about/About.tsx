import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


export default function About() {
    return (
        <Tabs defaultValue="portfolio" className="px-2 mt-6">
            <TabsList className="w-full justify-between bg-foreground/5">
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="about">about</TabsTrigger>
                <TabsTrigger value="blog">Blog</TabsTrigger>
            </TabsList>
            <TabsContent value="portfolio"> Portfolio</TabsContent>
            <TabsContent value="about"> About</TabsContent>
            <TabsContent value="blog"> Blog</TabsContent>
        </Tabs>
    )
}
