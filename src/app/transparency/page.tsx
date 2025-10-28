import { FadeIn } from "@/components/animated/fade-in";
import PageHeader from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const onChainMetrics = [
    { title: "Proposals Created", value: "42" },
    { title: "Proposals Approved", value: "35" },
    { title: "Total Votes", value: "2,104" },
    { title: "Unique Voters", value: "188" },
    { title: "Hypercerts Issued", value: "567" },
    { title: "ImpactPool Payments", value: "12 ETH" },
];

const offChainMetrics = [
    { title: "Verified Actions (Hub)", value: "1,256" },
    { title: "Active Users (App)", value: "2,300+" },
];

export default function TransparencyPage() {
  return (
    <>
      <PageHeader
        title="Transparency"
        description="Radical transparency is a core principle. Explore our on-chain metrics, financial reports, and audit results."
      />
      <FadeIn>
        <section className="py-24 sm:py-32">
          <div className="container">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-center">On-chain Metrics</h2>
            <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">Live data from our smart contracts, visualized via Dune and TheGraph.</p>
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart2 className="text-primary"/> DAO Governance Dashboard</CardTitle>
                <CardDescription>This is a placeholder for a Dune Analytics or TheGraph embed.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Embedded Dashboard Here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>
      <FadeIn>
         <section className="py-24 sm:py-32 bg-card border-y">
          <div className="container">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-center">Financial Reports</h2>
            <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">Download our periodic financial reports for a detailed breakdown of our treasury and expenditures.</p>
            <div className="mt-12 max-w-2xl mx-auto space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-lg">
                    <p className="font-medium">Financial Report - Q2 2024</p>
                    <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4"/>Download PDF</Button>
                </div>
                 <div className="flex justify-between items-center p-4 border rounded-lg">
                    <p className="font-medium">Financial Report - Q1 2024</p>
                    <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4"/>Download PDF</Button>
                </div>
            </div>
          </div>
        </section>
      </FadeIn>
       <FadeIn>
        <section className="py-24 sm:py-32">
          <div className="container">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-center">Audits & Methodology</h2>
            <p className="mt-4 text-muted-foreground text-center max-w-2xl mx-auto">Our smart contracts are professionally audited for security, and our methodologies are publicly documented.</p>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Security Audits</CardTitle>
                        <CardDescription>Links to third-party security audit reports.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li><Button variant="link" className="p-0 h-auto">RegenFund Contracts Audit - July 2024</Button></li>
                            <li><Button variant="link" className="p-0 h-auto">RegenHub Attestation Audit - May 2024</Button></li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Methodology</CardTitle>
                        <CardDescription>Explanation of how we calculate and verify our metrics.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">Our methodology for calculating off-chain metrics like 'Verified Actions' is documented in our <Button variant="link" className="p-0 h-auto">Transparency Handbook</Button>.</p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
