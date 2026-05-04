import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UserDetail.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://dummyjson.com/users/${id}`);
      const data = await res.json();
      setUser([data]);
    };
    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  const filteredData = user.filter((x) =>
    x.username.toLowerCase().includes(search.toLowerCase()),
  );

  const sorteddata = [...filteredData];

  if (sort === "lowtohigh") {
    sorteddata.sort((a, b) => a.age - b.age);
  } else if (sort === "hightolow") {
    sorteddata.sort((a, b) => b.age - a.age);
  } else if (sort === "atoz") {
    sorteddata.sort((a, b) => a.username.localeCompare(b.username));
  } else if (sort === "ztoa") {
    sorteddata.sort((a, b) => b.username.localeCompare(a.username));
  }

  return (
    <div className="details">
      <button className="backbtn" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="searchbox">
        <input
          type="text"
          placeholder="Search by username or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search"
        />
      </div>

      <div>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort</option>
          <option value="atoz">A - Z</option>
          <option value="ztoa">Z - A</option>
          <option value="lowtohigh">Age: Low to High</option>
          <option value="hightolow">Age: High to Low</option>
        </select>
      </div>

      {sorteddata.length === 0 ? (
        <div>No data found</div>
      ) : (
        sorteddata.map((u) => (
          <div key={u.id}>
            <LazyLoadImage
              src={u.image}
              alt={u.username}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
            />

            <h2>
              {u.firstName} {u.lastName} {u.maidenName}
            </h2>

            <p>
              <strong>Username:</strong> {u.username}
            </p>
            <p>
              <strong>Role:</strong> {u.role}
            </p>
            <p>
              <strong>Email:</strong> {u.email}
            </p>
            <p>
              <strong>Phone:</strong> {u.phone}
            </p>
            <p>
              <strong>Age:</strong> {u.age}
            </p>
            <p>
              <strong>Gender:</strong> {u.gender}
            </p>
            <p>
              <strong>Birth Date:</strong> {u.birthDate}
            </p>
            <p>
              <strong>Blood Group:</strong> {u.bloodGroup}
            </p>
            <p>
              <strong>Height:</strong> {u.height}
            </p>
            <p>
              <strong>Weight:</strong> {u.weight}
            </p>
            <p>
              <strong>Eye Color:</strong> {u.eyeColor}
            </p>

            <p>
              <strong>Hair:</strong> {u.hair?.color} - {u.hair?.type}
            </p>
            <p>
              <strong>University:</strong> {u.university}
            </p>

            <p>
              <strong>Street:</strong> {u.address?.address}
            </p>
            <p>
              <strong>City:</strong> {u.address?.city}
            </p>
            <p>
              <strong>State:</strong> {u.address?.state} ({u.address?.stateCode}
              )
            </p>
            <p>
              <strong>Postal Code:</strong> {u.address?.postalCode}
            </p>
            <p>
              <strong>Country:</strong> {u.address?.country}
            </p>

            <p>
              <strong>Coordinates:</strong> {u.address?.coordinates?.lat},{" "}
              {u.address?.coordinates?.lng}
            </p>

            <p>
              <strong>Company Name:</strong> {u.company?.name}
            </p>
            <p>
              <strong>Department:</strong> {u.company?.department}
            </p>
            <p>
              <strong>Title:</strong> {u.company?.title}
            </p>
            <p>
              <strong>Company City:</strong> {u.company?.address?.city}
            </p>
            <p>
              <strong>Company Country:</strong> {u.company?.address?.country}
            </p>

            <p>
              <strong>Card Number:</strong> {u.bank?.cardNumber}
            </p>
            <p>
              <strong>Card Type:</strong> {u.bank?.cardType}
            </p>
            <p>
              <strong>Expire:</strong> {u.bank?.cardExpire}
            </p>
            <p>
              <strong>Currency:</strong> {u.bank?.currency}
            </p>
            <p>
              <strong>IBAN:</strong> {u.bank?.iban}
            </p>

            <p>
              <strong>Crypto Coin:</strong> {u.crypto?.coin}
            </p>
            <p>
              <strong>Network:</strong> {u.crypto?.network}
            </p>
            <p>
              <strong>Wallet:</strong> {u.crypto?.wallet}
            </p>

            <p>
              <strong>IP:</strong> {u.ip}
            </p>
            <p>
              <strong>MAC:</strong> {u.macAddress}
            </p>
            <p>
              <strong>EIN:</strong> {u.ein}
            </p>
            <p>
              <strong>SSN:</strong> {u.ssn}
            </p>
            <p>
              <strong>User Agent:</strong> {u.userAgent}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserDetail;
