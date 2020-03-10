import Layout from '../Components/Layout';
import OverviewComponent from '../Components/Overview';
import AmenitiesComponent from '../Components/Amenities';
import LocationComponent from '../Components/location';
import SideMenu from '../Components/SideMenu';


const FountaineBleau = () => {
    return(
        <Layout>
          <SideMenu project="Prestige Fontaine Bleau"/>
          <OverviewComponent title="Fontaine Bleau Overview"/>
          <hr/>
          <AmenitiesComponent title="Fontaine Bleau Amanities"/>
          <hr/>
          <LocationComponent title="Fontaine Bleau Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.949070287174!2d77.74051741413528!3d12.975109318313503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11ff99828ba3%3A0xc975735a9e91bfbe!2sPRESTIGE%20FONTAINE%20BLEAU!5e0!3m2!1sen!2sin!4v1583828183205!5m2!1sen!2sin"/>
        </Layout>
    )
}

export default FountaineBleau;