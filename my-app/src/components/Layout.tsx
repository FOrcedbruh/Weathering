import { NavLink } from "react-router-dom";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CloudIcon from '@mui/icons-material/Cloud';
import SettingsIcon from '@mui/icons-material/Settings';





const Layout: React.FC = () => {
    return (
        <nav>
            <NavLink to='/'> <CloudIcon color="primary"/> Weather</NavLink>
            <NavLink to='map'> <MapOutlinedIcon color="primary"/> Map</NavLink>
            <NavLink to='/settings'> <SettingsIcon color="primary"/> Settings</NavLink>
        </nav>
    )
}

export default Layout;