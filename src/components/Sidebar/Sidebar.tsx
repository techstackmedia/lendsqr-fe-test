import "./Sidebar.scss";
import switchOrganization from "../../images/switch-organization.png";
import keyDropDown from "../../images/keydropdown.png";
import dashboard from "../../images/dashboard.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dashboardCustomersList = [
    "Users",
    "Guarantors",
    "Loans",
    "Decision Models",
    "Savings",
    "Loan Requests",
    "Whitelists",
    "Karma",
  ];

  const dashboardBusinessesList = [
    "Organization",
    "Loan Requests",
    "Savings Products",
    "Fees and Charges",
    "Transactions",
    "Services",
    "Service Account",
    "Settlements",
    "Reports",
  ];

  const dashboardSettingsList = [
    "Preferences",
    "Fees and Pricing",
    "Audit Logs",
  ];

  const dashboardCustomerItems = dashboardCustomersList.map((item: any) => {
    return (
      <div key={item}>
        <Link to={`/${item.toLowerCase().replaceAll(" ", "-")}`}>
          <img
            src={require(`../../images/${item
              .toLowerCase()
              .replaceAll(" ", "-")}.png`)}
            alt={`${item.toLowerCase()} icon`}
          />
          <span>{item}</span>
        </Link>
      </div>
    );
  });

  const dashboardBusinessesItems = dashboardBusinessesList.map((item: any) => {
    return (
      <div key={item}>
        <Link to={`/${item.toLowerCase().replaceAll(" ", "-")}`}>
          <img
            src={require(`../../images/${item
              .toLowerCase()
              .replaceAll(" ", "-")}.png`)}
            alt={`${item.toLowerCase()} icon`}
          />
          <span>{item.replace("Requests", "Products")}</span>
        </Link>
      </div>
    );
  });

  const dashboardSettingsItems = dashboardSettingsList.map((item: any) => {
    return (
      <div key={item}>
        <Link to={`/${item.toLowerCase().replaceAll(" ", "-")}`}>
          <img
            src={require(`../../images/${item
              .toLowerCase()
              .replaceAll(" ", "-")}.png`)}
            alt={`${item.toLowerCase()} icon`}
          />
          <span>{item.replace("Requests", "Products")}</span>
        </Link>
      </div>
    );
  });

  return (
    <aside className="dashboard">
      <div className="dashboard__position">
        <div>
          <img src={switchOrganization} alt="suit case icon" />
          <span>Switch Organization</span>
          <img src={keyDropDown} alt="dropdown icon" />
        </div>
        <div>
          <img src={dashboard} alt="home icon" />
          <span>Dashboard</span>
        </div>
        <p>Customers</p>
        {dashboardCustomerItems}
        <p>Businesses</p>
        {dashboardBusinessesItems}
        <p>Settings</p>
        {dashboardSettingsItems}
      </div>
    </aside>
  );
};

export default Sidebar;
