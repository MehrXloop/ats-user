import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import AzureADProvider from "next-auth/providers/azure-ad";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID ?? "",
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? "",
        }),
        AzureADProvider({
            clientId: process.env.AZURE_AD_CLIENT_ID ?? "",
            clientSecret: process.env.AZURE_AD_CLIENT_SECRET ?? "",
            authorization: {
                params: { scope: 'openid email profile User.Read offline_access Calendars.ReadWrite Calendars.Read Calendars.Read.Shared Calendars.ReadWrite.Shared' },
            },
            httpOptions: { timeout: 10000 },
            // tenantId: process.env.AZURE_AD_TENANT_ID??"",
        }),
    ]
})

export { handler as GET, handler as POST }