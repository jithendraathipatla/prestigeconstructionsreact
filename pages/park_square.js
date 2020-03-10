import Layout from '../Components/Layout';
import OverviewComponent from '../Components/Overview';
import AmenitiesComponent from '../Components/Amenities';
import LocationComponent from '../Components/location';
import SideMenu from '../Components/SideMenu';


const parkSquare = () => {
    return(
        <Layout>
          <SideMenu project="Prestige PArk Square"/>
          <OverviewComponent title="Park Square Overview"/>
          <hr/>
          <AmenitiesComponent title="Park Square Amenities"/>
          <hr/>
          <LocationComponent title="Park Square Location" iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62245.60076796316!2d77.56938517993613!3d12.820642077307527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ba11325c2d1%3A0xbe2b7d341fc1e035!2sPrestige%20Park%20Square!5e0!3m2!1sen!2sin!4v1583828552726!5m2!1sen!2sin"/>
        </Layout>
    )
}

export default parkSquare;