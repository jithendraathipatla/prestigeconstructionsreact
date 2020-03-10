import Layout from '../Components/Layout';
import OverviewComponent from '../Components/Overview';
import AmenitiesComponent from '../Components/Amenities';
import LocationComponent from '../Components/location';
import SideMenu from '../Components/SideMenu';


const songofsouth = () => {
    return(
        <Layout>
            <SideMenu project="Prestige Song of south"/>
            <OverviewComponent title="Song of south Overview"/>
            <hr/>
            <AmenitiesComponent title="Song of south Amenities"/>
            <hr/>
            <LocationComponent  title="Song of south Location" iframe="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.84081421235!2d77.6136469!3d12.8619848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85622af2679c25d8!2sPrestige%20Song%20of%20the%20South!5e0!3m2!1sen!2sin!4v1583824572461!5m2!1sen!2sin"/>
          </Layout>
    )
}

export default songofsouth;