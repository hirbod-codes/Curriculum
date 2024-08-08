import { JavascriptOutlined, SchoolOutlined } from "@mui/icons-material";


export function Icon({ name }: { name?: string | null | undefined; }) {
    if (!name)
        return;

    let Icon: any;
    switch (name) {
        case 'JavascriptOutlined':
            Icon = JavascriptOutlined;
            break;

        case 'SchoolOutlined':
            Icon = SchoolOutlined;
            break;

        default:
            break;
    }

    return (<Icon />);
}
