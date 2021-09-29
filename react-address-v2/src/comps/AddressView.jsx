import React from "react";

function AddressView({ addrList }) {
  const addressList = addrList.map((address) => {
    return (
      <tr>
        <td>{address.u_name}</td>
        <td>{address.u_addr}</td>
        <td>{address.u_tel}</td>
        <td>{address.u_age}</td>
      </tr>
    );
  });
  return (
    <table className="addr_list">
      <thead>
        <tr>
          <th>이름</th>
          <th>주소</th>
          <th>전화번호</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>{addressList}</tbody>
    </table>
  );
}

export default AddressView;
