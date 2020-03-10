import Layout from '../Components/Layout';
import OverviewComponent from '../Components/Overview';
import AmenitiesComponent from '../Components/Amenities';
import LocationComponent from '../Components/location';
import SideMenu from '../Components/SideMenu';


const Jindal = () => {
    return(
        <Layout>
         <SideMenu project="Prestige Jindal city"/>
         <OverviewComponent title="Jindal City Overview"/>
         <hr/>
         <AmenitiesComponent title="Jindal city Amenities"/>
         <hr/>
         <LocationComponent title="Jindal city Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7246220716765!2d77.48581591413593!3d13.053192516616061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2320ea5d750d%3A0x405b3e113778063b!2sPrestige%20Jindalcity!5e0!3m2!1sen!2sin!4v1583828266207!5m2!1sen!2sin"/>
        </Layout>
    )
}

export default Jindal;