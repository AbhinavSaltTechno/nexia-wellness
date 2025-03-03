import Banner from "@/serverComponents/Banner";
import FindPractitioner from "@/serverComponents/FindPractitioner";
import Footer from "@/serverComponents/Footer";
import HowDoes from "@/serverComponents/HowDoes";
import ReadBlog from "@/serverComponents/ReadBlog";
import Services from "@/serverComponents/Services";
import SubscribePage from "@/serverComponents/SubscribePage";
import Testimony from "@/serverComponents/Testimony";
import TrustedPage from "@/serverComponents/TrustedPage";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <HowDoes></HowDoes>
      <FindPractitioner></FindPractitioner>
      <Testimony></Testimony>
      <TrustedPage></TrustedPage>
      <ReadBlog></ReadBlog>
      <SubscribePage></SubscribePage>
      <Footer />
    </>
  );
}
