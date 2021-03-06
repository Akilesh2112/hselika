import Link from "next/link";
import Layout from "@/components/Layout";

export default function FirstPost() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold underline">First Post</h1>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Layout>
    )
}
