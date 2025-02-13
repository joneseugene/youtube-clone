import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
import { LayoutProps } from "@/utils/interface/LayoutProps"

const Layout = ({ children } : LayoutProps) => {
    return (
        <HomeLayout>
            { children }
        </HomeLayout>
    )
}

export default Layout;