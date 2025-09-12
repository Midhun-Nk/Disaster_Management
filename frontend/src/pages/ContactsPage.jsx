import { contacts } from "../assets/data";

export function ContactsPage() {
  /* ... No changes ... */

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {contacts.map((contact) => (
        <div
          key={contact.name}
          className="bg-white p-5 rounded-2xl shadow-md text-center"
        >
          <h3 className="text-lg font-bold text-slate-800">{contact.name}</h3>
          <p className="text-3xl font-bold text-slate-900 my-3">
            {contact.number}
          </p>
          <a
            href={`tel:${contact.number.split(" ")[0]}`}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call Now
          </a>
        </div>
      ))}
    </div>
  );
}
