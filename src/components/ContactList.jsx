import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ propsForMap, onDelete }) {
  return (
    <div className="contact-list">
      {propsForMap.map((varAmbilMap) => (
        <ContactItem
          key={varAmbilMap.id}
          id={varAmbilMap.id}
          onDelete={onDelete}
          {...varAmbilMap}
        />
        // {... digunakan untuk mengambil banyak semua data pada data array}
      ))}
    </div>
  );
}

export default ContactList;
