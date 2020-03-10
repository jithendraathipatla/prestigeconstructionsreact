import Layout from '../Components/Layout';
import OverviewComponent from '../Components/Overview';
import AmenitiesComponent from '../Components/Amenities';
import LocationComponent from '../Components/location';
import SideMenu from '../Components/SideMenu';


const Brooklyn_heights = () => {
    return(
        <Layout>
         <SideMenu project="Prestige Brooklyn Heights"/>
         <OverviewComponent title="Brooklyn Heights Overview"/>
         <hr/>
         <AmenitiesComponent title="Brooklyn Heights Amenities"/>
         <hr/>
         <LocationComponent title="Brooklyn Heights Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8816213757054!2d77.57205421413462!3d12.915329219606678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1570abb9a537%3A0xa82f1573c426fc6a!2sPrestige%20Brooklyn%20Heights%20Rd%2C%201st%20Phase%2C%20J.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1583827566597!5m2!1sen!2sin"/>
        </Layout>
    )
}

export default Brooklyn_heights;