// import React, { useMemo, useState } from "react";

// /* =========================================================
//    MERCHANT DASHBOARD
//    LocalLink AI
// ========================================================= */

// function MerchantDashboard() {
//   /* =========================================================
//      STATE
//   ========================================================= */

//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const [search, setSearch] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "ESP32",
//       category: "Microcontroller",
//       price: 450,
//       quantity: 10,
//     },
//     {
//       id: 2,
//       name: "Arduino Uno",
//       category: "Microcontroller",
//       price: 550,
//       quantity: 5,
//     },
//     {
//       id: 3,
//       name: "Jumper Wires",
//       category: "Components",
//       price: 50,
//       quantity: 40,
//     },
//     {
//       id: 4,
//       name: "Ultrasonic Sensor",
//       category: "Sensors",
//       price: 100,
//       quantity: 2,
//     },
//     {
//       id: 5,
//       name: "Breadboard",
//       category: "Components",
//       price: 120,
//       quantity: 0,
//     },
//   ]);

//   const [showModal, setShowModal] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);

//   const [form, setForm] = useState({
//     name: "",
//     category: "",
//     price: "",
//     quantity: "",
//   });

//   /* =========================================================
//      FILTER
//   ========================================================= */

//   const filteredProducts = useMemo(() => {
//     const keyword = search.toLowerCase().trim();

//     if (!keyword) return products;

//     return products.filter(
//       (product) =>
//         product.name.toLowerCase().includes(keyword) ||
//         product.category.toLowerCase().includes(keyword)
//     );
//   }, [products, search]);

//   /* =========================================================
//      STATISTICS
//   ========================================================= */

//   const totalProducts = products.length;

//   const availableProducts = products.filter(
//     (product) => product.quantity > 0
//   ).length;

//   const lowStockProducts = products.filter(
//     (product) => product.quantity > 0 && product.quantity <= 5
//   ).length;

//   const outOfStockProducts = products.filter(
//     (product) => product.quantity === 0
//   ).length;

//   /* =========================================================
//      ADD PRODUCT
//   ========================================================= */

//   const openAddProduct = () => {
//     setEditingProduct(null);

//     setForm({
//       name: "",
//       category: "",
//       price: "",
//       quantity: "",
//     });

//     setShowModal(true);
//   };

//   /* =========================================================
//      EDIT PRODUCT
//   ========================================================= */

//   const openEditProduct = (product) => {
//     setEditingProduct(product);

//     setForm({
//       name: product.name,
//       category: product.category,
//       price: product.price,
//       quantity: product.quantity,
//     });

//     setShowModal(true);
//   };

//   /* =========================================================
//      SAVE PRODUCT
//   ========================================================= */

//   const saveProduct = (event) => {
//     event.preventDefault();

//     if (
//       !form.name.trim() ||
//       !form.category.trim() ||
//       form.price === "" ||
//       form.quantity === ""
//     ) {
//       return;
//     }

//     if (editingProduct) {
//       setProducts((currentProducts) =>
//         currentProducts.map((product) =>
//           product.id === editingProduct.id
//             ? {
//                 ...product,
//                 name: form.name.trim(),
//                 category: form.category.trim(),
//                 price: Number(form.price),
//                 quantity: Number(form.quantity),
//               }
//             : product
//         )
//       );
//     } else {
//       const newProduct = {
//         id: Date.now(),
//         name: form.name.trim(),
//         category: form.category.trim(),
//         price: Number(form.price),
//         quantity: Number(form.quantity),
//       };

//       setProducts((currentProducts) => [
//         ...currentProducts,
//         newProduct,
//       ]);
//     }

//     setShowModal(false);
//   };

//   /* =========================================================
//      DELETE PRODUCT
//   ========================================================= */

//   const deleteProduct = (id) => {
//     const confirmed = window.confirm(
//       "Are you sure you want to delete this product?"
//     );

//     if (!confirmed) return;

//     setProducts((currentProducts) =>
//       currentProducts.filter((product) => product.id !== id)
//     );
//   };

//   /* =========================================================
//      STATUS
//   ========================================================= */

//   const getStatus = (quantity) => {
//     if (quantity === 0) {
//       return {
//         label: "Out of Stock",
//         className: darkMode
//           ? "bg-red-500/10 text-red-400 border-red-500/20"
//           : "bg-red-50 text-red-600 border-red-200",
//         dot: "bg-red-500",
//       };
//     }

//     if (quantity <= 5) {
//       return {
//         label: "Low Stock",
//         className: darkMode
//           ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
//           : "bg-yellow-50 text-yellow-700 border-yellow-200",
//         dot: "bg-yellow-500",
//       };
//     }

//     return {
//       label: "In Stock",
//       className: darkMode
//         ? "bg-green-500/10 text-green-400 border-green-500/20"
//         : "bg-green-50 text-green-600 border-green-200",
//       dot: "bg-green-500",
//     };
//   };

//   /* =========================================================
//      THEME
//   ========================================================= */

//   const theme = {
//     page: darkMode
//       ? "bg-[#05050c] text-white"
//       : "bg-[#f6f5fb] text-[#111122]",

//     sidebar: darkMode
//       ? "bg-[#090913]/95 border-white/[0.07]"
//       : "bg-white/95 border-gray-200",

//     card: darkMode
//       ? "bg-[#0d0d18]/90 border-white/[0.08]"
//       : "bg-white/90 border-gray-200",

//     cardSoft: darkMode
//       ? "bg-white/[0.025] border-white/[0.06]"
//       : "bg-gray-50 border-gray-100",

//     secondary: darkMode ? "text-gray-400" : "text-gray-500",

//     muted: darkMode ? "text-gray-600" : "text-gray-400",

//     border: darkMode
//       ? "border-white/[0.07]"
//       : "border-gray-200",
//   };

//   /* =========================================================
//      CITY BUILDINGS
//   ========================================================= */

//   const buildings = [
//     { width: 55, height: 130, left: "2%" },
//     { width: 75, height: 180, left: "7%" },
//     { width: 45, height: 110, left: "14%" },
//     { width: 90, height: 220, left: "19%" },
//     { width: 65, height: 150, left: "27%" },
//     { width: 105, height: 245, left: "34%" },
//     { width: 60, height: 165, left: "43%" },
//     { width: 95, height: 205, left: "49%" },
//     { width: 55, height: 135, left: "58%" },
//     { width: 115, height: 255, left: "64%" },
//     { width: 70, height: 175, left: "73%" },
//     { width: 100, height: 225, left: "80%" },
//     { width: 60, height: 145, left: "89%" },
//     { width: 85, height: 190, left: "94%" },
//   ];

//   /* =========================================================
//      CITY BACKGROUND
//   ========================================================= */

//   const CityBackground = () => {
//     return (
//       <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

//         <div
//           className={`absolute -top-52 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full blur-[150px] ${
//             darkMode
//               ? "bg-purple-700/20"
//               : "bg-purple-300/25"
//           }`}
//         />

//         <div
//           className={`absolute top-1/3 -left-48 w-[450px] h-[450px] rounded-full blur-[150px] ${
//             darkMode
//               ? "bg-fuchsia-700/10"
//               : "bg-fuchsia-300/15"
//           }`}
//         />

//         <div
//           className="absolute inset-0"
//           style={{
//             opacity: darkMode ? 0.16 : 0.3,
//             backgroundImage: darkMode
//               ? `
//                 linear-gradient(
//                   rgba(168,85,247,0.07) 1px,
//                   transparent 1px
//                 ),
//                 linear-gradient(
//                   90deg,
//                   rgba(168,85,247,0.07) 1px,
//                   transparent 1px
//                 )
//               `
//               : `
//                 linear-gradient(
//                   rgba(124,58,237,0.045) 1px,
//                   transparent 1px
//                 ),
//                 linear-gradient(
//                   90deg,
//                   rgba(124,58,237,0.045) 1px,
//                   transparent 1px
//                 )
//               `,
//             backgroundSize: "48px 48px",
//           }}
//         />

//         <div className="absolute top-[13%] left-[25%] text-purple-400 text-sm animate-pulse">
//           ✦
//         </div>

//         <div
//           className="absolute top-[22%] left-[62%] text-purple-400 text-xs animate-pulse"
//           style={{ animationDelay: "0.8s" }}
//         >
//           ✦
//         </div>

//         <div
//           className="absolute top-[30%] left-[83%] text-fuchsia-400 text-sm animate-pulse"
//           style={{ animationDelay: "1.4s" }}
//         >
//           ✦
//         </div>

//         <div
//           className="absolute top-[17%] left-[91%] text-purple-300 text-xs animate-pulse"
//           style={{ animationDelay: "2s" }}
//         >
//           ✧
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-[260px]">

//           <div
//             className={`absolute bottom-0 left-0 right-0 h-32 blur-3xl ${
//               darkMode
//                 ? "bg-purple-700/10"
//                 : "bg-purple-300/10"
//             }`}
//           />

//           {buildings.map((building, buildingIndex) => (
//             <div
//               key={buildingIndex}
//               className={`absolute bottom-0 rounded-t-sm border ${
//                 darkMode
//                   ? "bg-[#0a0a14]/70 border-purple-400/[0.08]"
//                   : "bg-purple-100/45 border-purple-300/[0.14]"
//               }`}
//               style={{
//                 width: `${building.width}px`,
//                 height: `${building.height}px`,
//                 left: building.left,
//               }}
//             >

//               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-purple-400/20" />

//               <div className="grid grid-cols-3 gap-2 p-3 opacity-50">
//                 {Array.from({ length: 18 }).map(
//                   (_, windowIndex) => (
//                     <span
//                       key={windowIndex}
//                       className={`h-1.5 rounded-[1px] ${
//                         windowIndex % 5 === buildingIndex % 5
//                           ? darkMode
//                             ? "bg-purple-400/60 animate-pulse"
//                             : "bg-purple-500/35 animate-pulse"
//                           : darkMode
//                           ? "bg-purple-300/10"
//                           : "bg-purple-400/10"
//                       }`}
//                       style={{
//                         animationDelay: `${
//                           (windowIndex + buildingIndex) *
//                           0.15
//                         }s`,
//                       }}
//                     />
//                   )
//                 )}
//               </div>

//             </div>
//           ))}
//         </div>

//         <div
//           className={`absolute bottom-0 left-0 right-0 h-[280px] ${
//             darkMode
//               ? "bg-gradient-to-t from-[#05050c] via-[#05050c]/70 to-transparent"
//               : "bg-gradient-to-t from-[#f6f5fb] via-[#f6f5fb]/60 to-transparent"
//           }`}
//         />

//       </div>
//     );
//   };

//   /* =========================================================
//      PAGE HEADER
//   ========================================================= */

//   const PageHeader = ({
//     eyebrow,
//     title,
//     description,
//   }) => {
//     return (
//       <div className="mb-8">

//         <div className="flex items-center gap-2 mb-3">
//           <span className="relative w-2 h-2 rounded-full bg-purple-500">
//             <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-30" />
//           </span>

//           <p className="text-[11px] text-purple-600 uppercase tracking-[0.22em] font-semibold">
//             {eyebrow}
//           </p>
//         </div>

//         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
//           {title}
//         </h2>

//         <p className={`text-sm mt-2 ${theme.secondary}`}>
//           {description}
//         </p>

//       </div>
//     );
//   };

//   /* =========================================================
//      STATS
//   ========================================================= */

//   const Stats = () => {
//     return (
//       <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">

//         {/* TOTAL */}

//         <div
//           className={`relative overflow-hidden rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
//             darkMode
//               ? "bg-gradient-to-br from-purple-950/30 to-[#0d0d18] border-purple-500/15 hover:shadow-purple-900/10"
//               : "bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-purple-100"
//           }`}
//         >

//           <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-purple-500/10 blur-3xl" />

//           <div className="relative">

//             <div className="flex items-center justify-between">

//               <p className={`text-xs ${theme.secondary}`}>
//                 Total Products
//               </p>

//               <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
//                 ▤
//               </div>

//             </div>

//             <div className="flex items-end gap-3 mt-5">

//               <p className="text-3xl font-bold">
//                 {totalProducts}
//               </p>

//               <span className="text-xs text-purple-600 mb-1">
//                 items
//               </span>

//             </div>

//             <p className={`text-[11px] mt-2 ${theme.muted}`}>
//               Registered in your inventory
//             </p>

//           </div>
//         </div>

//         {/* AVAILABLE */}

//         <div
//           className={`rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.card}`}
//         >

//           <div className="flex items-center justify-between">

//             <p className={`text-xs ${theme.secondary}`}>
//               Available Products
//             </p>

//             <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
//               ✓
//             </div>

//           </div>

//           <div className="flex items-end gap-3 mt-5">

//             <p className="text-3xl font-bold">
//               {availableProducts}
//             </p>

//             <span className="text-xs text-green-600 mb-1">
//               active
//             </span>

//           </div>

//           <p className={`text-[11px] mt-2 ${theme.muted}`}>
//             Visible to nearby students
//           </p>

//         </div>

//         {/* LOW STOCK */}

//         <div
//           className={`rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.card}`}
//         >

//           <div className="flex items-center justify-between">

//             <p className={`text-xs ${theme.secondary}`}>
//               Low Stock
//             </p>

//             <div className="w-9 h-9 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600">
//               !
//             </div>

//           </div>

//           <div className="flex items-end gap-3 mt-5">

//             <p className="text-3xl font-bold">
//               {lowStockProducts}
//             </p>

//             <span className="text-xs text-yellow-600 mb-1">
//               attention
//             </span>

//           </div>

//           <p className={`text-[11px] mt-2 ${theme.muted}`}>
//             Products that need restocking
//           </p>

//         </div>

//         {/* OUT OF STOCK */}

//         <div
//           className={`rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.card}`}
//         >

//           <div className="flex items-center justify-between">

//             <p className={`text-xs ${theme.secondary}`}>
//               Out of Stock
//             </p>

//             <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
//               ×
//             </div>

//           </div>

//           <div className="flex items-end gap-3 mt-5">

//             <p className="text-3xl font-bold">
//               {outOfStockProducts}
//             </p>

//             <span className="text-xs text-red-600 mb-1">
//               unavailable
//             </span>

//           </div>

//           <p className={`text-[11px] mt-2 ${theme.muted}`}>
//             Products currently unavailable
//           </p>

//         </div>

//       </section>
//     );
//   };

//   /* =========================================================
//      SHOP PROFILE
//   ========================================================= */

//   const ShopProfile = () => {
//     return (
//       <div
//         className={`rounded-2xl border p-6 backdrop-blur-md ${theme.card}`}
//       >

//         <div className="flex items-start justify-between mb-6">

//           <div>

//             <p className="text-[10px] text-purple-600 uppercase tracking-[0.2em] font-semibold">
//               Shop Profile
//             </p>

//             <h3 className="text-xl font-semibold mt-2">
//               Thambu Electronics
//             </h3>

//           </div>

//           <button
//             onClick={() => setActiveTab("My Shop")}
//             className={`px-4 py-2 rounded-xl border text-xs transition ${
//               darkMode
//                 ? "border-white/[0.08] text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/5"
//                 : "border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-200 hover:bg-purple-50"
//             }`}
//           >
//             Edit Shop
//           </button>

//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//           <div
//             className={`rounded-xl p-4 border ${theme.cardSoft}`}
//           >
//             <p
//               className={`text-[10px] uppercase tracking-wider ${theme.muted}`}
//             >
//               Category
//             </p>

//             <p className="text-sm font-medium mt-2">
//               Electronics Components
//             </p>
//           </div>

//           <div
//             className={`rounded-xl p-4 border ${theme.cardSoft}`}
//           >
//             <p
//               className={`text-[10px] uppercase tracking-wider ${theme.muted}`}
//             >
//               Location
//             </p>

//             <p className="text-sm font-medium mt-2">
//               Coimbatore
//             </p>
//           </div>

//           <div
//             className={`rounded-xl p-4 border ${theme.cardSoft}`}
//           >
//             <p
//               className={`text-[10px] uppercase tracking-wider ${theme.muted}`}
//             >
//               Visibility
//             </p>

//             <div className="flex items-center gap-2 mt-2">

//               <span className="w-2 h-2 rounded-full bg-green-500" />

//               <p className="text-sm text-green-600">
//                 Visible to students
//               </p>

//             </div>

//           </div>

//         </div>

//       </div>
//     );
//   };

//   /* =========================================================
//      AI INSIGHT
//   ========================================================= */

//   const AIInsight = () => {
//     return (
//       <div
//         className={`relative overflow-hidden rounded-2xl border p-6 ${
//           darkMode
//             ? "bg-gradient-to-br from-purple-950/30 via-[#11101b] to-[#0d0d18] border-purple-500/20"
//             : "bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 border-purple-100"
//         }`}
//       >

//         <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-purple-400/10 blur-3xl" />

//         <div className="relative">

//           <div className="flex items-center gap-2">

//             <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
//               ✦
//             </div>

//             <p className="text-xs text-purple-600 font-semibold">
//               AI Insight
//             </p>

//           </div>

//           <h3 className="text-base font-semibold mt-5">
//             Inventory attention
//           </h3>

//           <p
//             className={`text-xs leading-relaxed mt-2 ${theme.secondary}`}
//           >
//             Your Ultrasonic Sensor stock is low. Keeping frequently
//             searched components available can improve student discovery.
//           </p>

//           <div
//             className={`mt-5 pt-4 border-t ${
//               darkMode
//                 ? "border-white/[0.06]"
//                 : "border-purple-100"
//             }`}
//           >

//             <p
//               className={`text-[10px] uppercase tracking-wider ${theme.muted}`}
//             >
//               Recommendation
//             </p>

//             <p className="text-xs text-purple-600 font-medium mt-1">
//               Consider restocking soon.
//             </p>

//           </div>

//         </div>

//       </div>
//     );
//   };

//   /* =========================================================
//      INVENTORY TABLE
//   ========================================================= */

//   const InventoryTable = () => {
//     return (
//       <section
//         className={`rounded-2xl border overflow-hidden backdrop-blur-md ${theme.card}`}
//       >

//         {/* HEADER */}

//         <div
//           className={`p-6 border-b ${
//             darkMode
//               ? "border-white/[0.06]"
//               : "border-gray-100"
//           }`}
//         >

//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

//             <div>

//               <p className="text-[10px] text-purple-600 uppercase tracking-[0.2em] font-semibold">
//                 Inventory
//               </p>

//               <h3 className="text-xl font-semibold mt-2">
//                 Product Management
//               </h3>

//               <p
//                 className={`text-xs mt-1 ${theme.secondary}`}
//               >
//                 Keep your local inventory up to date.
//               </p>

//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">

//               <div className="relative">

//                 <span
//                   className={`absolute left-3 top-1/2 -translate-y-1/2 ${theme.muted}`}
//                 >
//                   ⌕
//                 </span>

//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   value={search}
//                   onChange={(event) =>
//                     setSearch(event.target.value)
//                   }
//                   className={`w-full sm:w-56 pl-9 pr-3 py-2.5 rounded-xl border text-xs outline-none transition ${
//                     darkMode
//                       ? "bg-white/[0.025] border-white/[0.08] text-gray-200 placeholder:text-gray-600 focus:border-purple-500/40"
//                       : "bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-purple-300 focus:bg-white"
//                   }`}
//                 />

//               </div>

//               <button
//                 onClick={openAddProduct}
//                 className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-700 hover:to-fuchsia-600 text-white text-xs font-semibold shadow-lg shadow-purple-500/20 transition"
//               >
//                 + Add Product
//               </button>

//             </div>

//           </div>

//         </div>

//         {/* TABLE */}

//         <div className="overflow-x-auto">

//           <table className="w-full min-w-[800px]">

//             <thead>

//               <tr
//                 className={`border-b ${
//                   darkMode
//                     ? "border-white/[0.05]"
//                     : "border-gray-100"
//                 }`}
//               >

//                 {[
//                   "Product",
//                   "Category",
//                   "Price",
//                   "Quantity",
//                   "Status",
//                   "Action",
//                 ].map((heading) => (

//                   <th
//                     key={heading}
//                     className={`px-6 py-4 text-left text-[10px] uppercase tracking-wider font-semibold ${theme.muted}`}
//                   >
//                     {heading}
//                   </th>

//                 ))}

//               </tr>

//             </thead>

//             <tbody>

//               {filteredProducts.map((product) => {

//                 const status = getStatus(product.quantity);

//                 return (

//                   <tr
//                     key={product.id}
//                     className={`border-b transition ${
//                       darkMode
//                         ? "border-white/[0.04] hover:bg-purple-500/[0.025]"
//                         : "border-gray-100 hover:bg-purple-50/40"
//                     }`}
//                   >

//                     <td className="px-6 py-5">

//                       <div className="flex items-center gap-3">

//                         <div
//                           className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold ${
//                             darkMode
//                               ? "bg-purple-500/10 text-purple-300"
//                               : "bg-purple-50 text-purple-600"
//                           }`}
//                         >
//                           {product.name.charAt(0)}
//                         </div>

//                         <p className="text-sm font-semibold">
//                           {product.name}
//                         </p>

//                       </div>

//                     </td>

//                     <td className="px-6 py-5">

//                       <p
//                         className={`text-xs ${theme.secondary}`}
//                       >
//                         {product.category}
//                       </p>

//                     </td>

//                     <td className="px-6 py-5">

//                       <p className="text-sm font-medium">
//                         ₹{product.price}
//                       </p>

//                     </td>

//                     <td className="px-6 py-5">

//                       <p className="text-sm font-medium">
//                         {product.quantity}
//                       </p>

//                     </td>

//                     <td className="px-6 py-5">

//                       <span
//                         className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-medium ${status.className}`}
//                       >

//                         <span
//                           className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
//                         />

//                         {status.label}

//                       </span>

//                     </td>

//                     <td className="px-6 py-5">

//                       <div className="flex items-center gap-4">

//                         <button
//                           onClick={() =>
//                             openEditProduct(product)
//                           }
//                           className="text-xs text-purple-600 hover:text-purple-800 font-medium transition"
//                         >
//                           Edit
//                         </button>

//                         <button
//                           onClick={() =>
//                             deleteProduct(product.id)
//                           }
//                           className={`text-xs transition ${
//                             darkMode
//                               ? "text-gray-500 hover:text-red-400"
//                               : "text-gray-400 hover:text-red-500"
//                           }`}
//                         >
//                           Delete
//                         </button>

//                       </div>

//                     </td>

//                   </tr>

//                 );
//               })}

//               {filteredProducts.length === 0 && (

//                 <tr>

//                   <td
//                     colSpan="6"
//                     className="px-6 py-14 text-center"
//                   >

//                     <div className="text-3xl text-purple-300 mb-3">
//                       ⌕
//                     </div>

//                     <p
//                       className={`text-sm ${theme.secondary}`}
//                     >
//                       No products found.
//                     </p>

//                     <p
//                       className={`text-xs mt-1 ${theme.muted}`}
//                     >
//                       Try another product name or category.
//                     </p>

//                   </td>

//                 </tr>

//               )}

//             </tbody>

//           </table>

//         </div>

//         {/* FOOTER */}

//         <div
//           className={`px-6 py-4 border-t flex items-center justify-between ${
//             darkMode
//               ? "border-white/[0.05]"
//               : "border-gray-100"
//           }`}
//         >

//           <p className={`text-[10px] ${theme.muted}`}>
//             Showing {filteredProducts.length} of{" "}
//             {products.length} products
//           </p>

//           <div className="flex items-center gap-2">

//             <span className="w-1.5 h-1.5 rounded-full bg-green-500" />

//             <p className={`text-[10px] ${theme.muted}`}>
//               Inventory sync: Ready
//             </p>

//           </div>

//         </div>

//       </section>
//     );
//   };

//   /* =========================================================
//      DASHBOARD PAGE
//   ========================================================= */

//   const DashboardPage = () => {
//     return (
//       <>
//         <PageHeader
//           eyebrow="Merchant Dashboard"
//           title="Welcome back."
//           description="Manage your inventory and keep your local store discoverable."
//         />

//         <Stats />

//         <section className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">

//           <div className="xl:col-span-2">
//             <ShopProfile />
//           </div>

//           <AIInsight />

//         </section>

        

//       </>
//     );
//   };

//   /* =========================================================
//      MY SHOP PAGE
//   ========================================================= */

//   const MyShopPage = () => {
//     return (
//       <>
//         <PageHeader
//           eyebrow="My Shop"
//           title="Shop Profile"
//           description="Manage the information students see about your local store."
//         />

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

//           <div
//             className={`xl:col-span-2 rounded-2xl border p-7 backdrop-blur-md ${theme.card}`}
//           >

//             <div className="flex items-start justify-between mb-8">

//               <div>

//                 <p className="text-[10px] text-purple-600 uppercase tracking-[0.2em] font-semibold">
//                   Store Information
//                 </p>

//                 <h3 className="text-2xl font-semibold mt-2">
//                   Thambu Electronics
//                 </h3>

//               </div>

//               <div className="px-3 py-1.5 rounded-full border border-green-200 bg-green-50 text-green-600 text-xs">
//                 Active
//               </div>

//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//               <div
//                 className={`rounded-xl p-5 border ${theme.cardSoft}`}
//               >

//                 <p
//                   className={`text-[10px] uppercase tracking-wider ${theme.muted}`}
//                 >
//                   Shop Name
//                 </p>

//                 <p className="text-sm font-semibold mt-2">
//                   Thambu Electronics
//                 </p>

//               </div>

//               <div
//                 className={`rounded-xl p-5 border ${theme.cardSoft}`}
//               >

//                 <p
//                   className={`text-[10px] uppercase tracking-wider ${theme.muted}`}
//                 >
//                   Category
//                 </p>

//                 <p className="text-sm font-semibold mt-2">
//                   Electronics Components
//                 </p>

//               </div>

//               <div
//                 className={`rounded-xl p-5 border ${theme.cardSoft}`}
//               >

//                 <p
//                   className={`text-[10px] uppercase tracking-wider ${theme.muted}`}
//                 >
//                   Address
//                 </p>

//                 <p className="text-sm font-semibold mt-2">
//                   19-A, Sathy Rd, Coimbatore
//                 </p>

//               </div>

//               <div
//                 className={`rounded-xl p-5 border ${theme.cardSoft}`}
//               >

//                 <p
//                   className={`text-[10px] uppercase tracking-wider ${theme.muted}`}
//                 >
//                   Location
//                 </p>

//                 <p className="text-sm font-semibold mt-2">
//                   Coimbatore
//                 </p>

//               </div>

//               <div
//                 className={`rounded-xl p-5 border ${theme.cardSoft}`}
//               >

//                 <p
//                   className={`text-[10px] uppercase tracking-wider ${theme.muted}`}
//                 >
//                   Latitude
//                 </p>

//                 <p className="text-sm font-semibold mt-2">
//                   11.06086321
//                 </p>

//               </div>

//               <div
//                 className={`rounded-xl p-5 border ${theme.cardSoft}`}
//               >

//                 <p
//                   className={`text-[10px] uppercase tracking-wider ${theme.muted}`}
//                 >
//                   Longitude
//                 </p>

//                 <p className="text-sm font-semibold mt-2">
//                   76.9960545
//                 </p>

//               </div>

//             </div>

//             <button
//               className="mt-7 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-xs font-semibold shadow-lg shadow-purple-500/20"
//             >
//               Edit Shop Details
//             </button>

//           </div>

//           <div
//             className={`rounded-2xl border p-6 ${theme.card}`}
//           >

//             <p className="text-[10px] text-purple-600 uppercase tracking-[0.2em] font-semibold">
//               Shop Visibility
//             </p>

//             <h3 className="text-lg font-semibold mt-3">
//               Your shop is discoverable
//             </h3>

//             <p className={`text-xs leading-relaxed mt-3 ${theme.secondary}`}>
//               Students can find your shop when they search for
//               products available nearby.
//             </p>

//             <div
//               className={`mt-6 rounded-xl p-4 border ${theme.cardSoft}`}
//             >

//               <div className="flex items-center gap-2">

//                 <span className="relative w-2.5 h-2.5 rounded-full bg-green-500">
//                   <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
//                 </span>

//                 <span className="text-sm font-medium text-green-600">
//                   Visible to students
//                 </span>

//               </div>

//             </div>

//             <div
//               className={`mt-4 rounded-xl p-4 border ${theme.cardSoft}`}
//             >

//               <p className={`text-[10px] uppercase ${theme.muted}`}>
//                 Products listed
//               </p>

//               <p className="text-2xl font-bold mt-2">
//                 {totalProducts}
//               </p>

//             </div>

//           </div>

//         </div>

//       </>
//     );
//   };

//   /* =========================================================
//      INVENTORY PAGE
//   ========================================================= */

//   const InventoryPage = () => {
//     return (
//       <>
//         <PageHeader
//           eyebrow="Inventory"
//           title="Product Management"
//           description="Add, edit and maintain the products available in your shop."
//         />

//         <InventoryTable />
//       </>
//     );
//   };

//   /* =========================================================
//      AI ASSISTANT PAGE
//   ========================================================= */

//   const AIAssistantPage = () => {
//     return (
//       <>
//         <PageHeader
//           eyebrow="AI Assistant"
//           title="Inventory Insights"
//           description="Simple AI-powered suggestions to help keep your inventory useful to students."
//         />

//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

//           <div
//             className={`xl:col-span-2 rounded-2xl border p-7 ${theme.card}`}
//           >

//             <div className="flex items-center gap-3">

//               <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl">
//                 ✦
//               </div>

//               <div>

//                 <p className="text-xs text-purple-600 font-semibold">
//                   LocalLink AI
//                 </p>

//                 <h3 className="text-xl font-semibold mt-1">
//                   Inventory Analysis
//                 </h3>

//               </div>

//             </div>

//             <div className="mt-8 space-y-4">

//               <div
//                 className={`rounded-xl border p-5 ${theme.cardSoft}`}
//               >

//                 <div className="flex items-center justify-between">

//                   <div>

//                     <p className={`text-[10px] uppercase ${theme.muted}`}>
//                       Stock Alert
//                     </p>

//                     <p className="text-sm font-semibold mt-2">
//                       Ultrasonic Sensor
//                     </p>

//                   </div>

//                   <span className="px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-700 text-[10px]">
//                     Low Stock
//                   </span>

//                 </div>

//                 <p className={`text-xs mt-3 ${theme.secondary}`}>
//                   Current quantity is {2}. Consider adding more
//                   units because students frequently search for
//                   project components.
//                 </p>

//               </div>

//               <div
//                 className={`rounded-xl border p-5 ${theme.cardSoft}`}
//               >

//                 <div className="flex items-center justify-between">

//                   <div>

//                     <p className={`text-[10px] uppercase ${theme.muted}`}>
//                       Availability
//                     </p>

//                     <p className="text-sm font-semibold mt-2">
//                       {availableProducts} products available
//                     </p>

//                   </div>

//                   <span className="px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-600 text-[10px]">
//                     Healthy
//                   </span>

//                 </div>

//                 <p className={`text-xs mt-3 ${theme.secondary}`}>
//                   Your currently available products can be
//                   discovered by nearby students.
//                 </p>

//               </div>

//               <div
//                 className={`rounded-xl border p-5 ${theme.cardSoft}`}
//               >

//                 <div className="flex items-center justify-between">

//                   <div>

//                     <p className={`text-[10px] uppercase ${theme.muted}`}>
//                       Recommendation
//                     </p>

//                     <p className="text-sm font-semibold mt-2">
//                       Keep frequently searched components stocked
//                     </p>

//                   </div>

//                   <span className="text-purple-600 text-xl">
//                     ✦
//                   </span>

//                 </div>

//                 <p className={`text-xs mt-3 ${theme.secondary}`}>
//                   Maintaining useful components such as Arduino,
//                   jumper wires and sensors can improve your shop's
//                   visibility to students.
//                 </p>

//               </div>

//             </div>

//           </div>

//           <div
//             className={`rounded-2xl border p-6 bg-gradient-to-br ${
//               darkMode
//                 ? "from-purple-950/30 via-[#11101b] to-[#0d0d18] border-purple-500/20"
//                 : "from-purple-50 via-white to-fuchsia-50 border-purple-100"
//             }`}
//           >

//             <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
//               ✦
//             </div>

//             <h3 className="text-lg font-semibold mt-5">
//               AI Summary
//             </h3>

//             <p className={`text-xs leading-relaxed mt-3 ${theme.secondary}`}>
//               Your shop currently has{" "}
//               <strong>{totalProducts}</strong> registered products.
//               {lowStockProducts > 0 &&
//                 ` ${lowStockProducts} product${
//                   lowStockProducts > 1 ? "s" : ""
//                 } need${
//                   lowStockProducts === 1 ? "s" : ""
//                 } attention.`}
//             </p>

//             <div
//               className={`mt-6 pt-5 border-t ${
//                 darkMode
//                   ? "border-white/[0.06]"
//                   : "border-purple-100"
//               }`}
//             >

//               <p className={`text-[10px] uppercase ${theme.muted}`}>
//                 Suggested Action
//               </p>

//               <p className="text-sm font-medium text-purple-600 mt-2">
//                 Update low-stock products regularly.
//               </p>

//             </div>

//           </div>

//         </div>

//       </>
//     );
//   };

//   /* =========================================================
//      PAGE CONTENT SWITCH
//   ========================================================= */

//   const renderPage = () => {

//     switch (activeTab) {

//       case "My Shop":
//         return <MyShopPage />;

//       case "Inventory":
//         return <InventoryPage />;

//       case "AI Assistant":
//         return <AIAssistantPage />;

//       case "Dashboard":
//       default:
//         return <DashboardPage />;

//     }

//   };

//   /* =========================================================
//      RETURN
//   ========================================================= */

//   return (
//     <div
//       className={`min-h-screen flex transition-colors duration-300 ${theme.page}`}
//     >

//       <CityBackground />

//       {/* =====================================================
//           SIDEBAR
//       ===================================================== */}

//       <aside
//         className={`relative z-20 w-[250px] shrink-0 min-h-screen border-r backdrop-blur-xl flex flex-col transition-colors duration-300 ${theme.sidebar}`}
//       >

//         {/* LOGO */}

//         <div className="px-6 pt-7 pb-6">

//           <div className="flex items-center gap-3">

//             <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-purple-500 to-fuchsia-500 flex items-center justify-center shadow-xl shadow-purple-500/25">

//               <span className="text-white font-bold text-lg">
//                 L
//               </span>

//               <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-fuchsia-400 shadow-lg shadow-fuchsia-400/70" />

//             </div>

//             <div>

//               <h1 className="text-lg font-bold tracking-tight">

//                 LocalLink{" "}

//                 <span className="text-purple-600">
//                   AI
//                 </span>

//               </h1>

//               <p
//                 className={`text-[9px] tracking-[0.2em] uppercase ${theme.muted}`}
//               >
//                 Merchant Portal
//               </p>

//             </div>

//           </div>

//         </div>

//         <div
//           className={`mx-5 border-t ${theme.border}`}
//         />

//         {/* NAVIGATION */}

//         <nav className="px-4 py-6 flex-1">

//           <p
//             className={`px-3 mb-3 text-[10px] uppercase tracking-[0.2em] ${theme.muted}`}
//           >
//             Workspace
//           </p>

//           <div className="space-y-1">
//                 {[
//   ["Dashboard", "⌂"],
//   ["My Shop", "□"],
//   ["Inventory", "▤"],
//   ["AI Assistant", "✦"],
// ].map(([item, icon]) => (

//   <button
//     key={item}
//     onClick={() => setActiveTab(item)}
            
//                 className={`group w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm transition-all duration-200 ${
//                   activeTab === item
//                     ? darkMode
//                       ? "bg-purple-500/10 text-purple-300 border border-purple-500/20 shadow-lg shadow-purple-900/10"
//                       : "bg-purple-50 text-purple-700 border border-purple-100 shadow-sm"
//                     : darkMode
//                     ? "text-gray-500 hover:text-gray-200 hover:bg-white/[0.035] border border-transparent"
//                     : "text-gray-500 hover:text-purple-700 hover:bg-purple-50/70 border border-transparent"
//                 }`}
//               >

//                 <span
//                   className={`w-8 h-8 flex items-center justify-center rounded-lg text-base transition ${
//                     activeTab === item
//                       ? darkMode
//                         ? "bg-purple-500/15 text-purple-400"
//                         : "bg-purple-100 text-purple-600"
//                       : darkMode
//                       ? "text-gray-600 group-hover:text-purple-400"
//                       : "text-gray-400 group-hover:text-purple-500"
//                   }`}
//                 >
//                   {icon}
//                 </span>

//                 <span>
//                   {item}
//                 </span>

//                 {item === "AI Assistant" && (

//                   <span className="ml-auto text-[8px] px-1.5 py-0.5 rounded bg-purple-100 text-purple-600 font-semibold">
//                     AI
//                   </span>

//                 )}

//               </button>

//             ))}

//           </div>

//         </nav>

//         {/* SHOP STATUS */}

//         <div className="px-4 pb-4">

//           <div
//             className={`rounded-xl border px-4 py-3 ${
//               darkMode
//                 ? "border-green-500/10 bg-green-500/[0.03]"
//                 : "border-green-200 bg-green-50"
//             }`}
//           >

//             <div className="flex items-center gap-2">

//               <span className="relative w-2 h-2 rounded-full bg-green-500">

//                 <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />

//               </span>

//               <span className="text-xs text-green-600 font-medium">
//                 Shop is active
//               </span>

//             </div>

//             <p
//               className={`text-[10px] mt-1 ${theme.muted}`}
//             >
//               Inventory visible to students
//             </p>

//           </div>

//         </div>

//         {/* LOGOUT */}

//         <div
//           className={`px-4 py-5 border-t ${theme.border}`}
//         >

//           <button
//             className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm transition ${
//               darkMode
//                 ? "text-gray-500 hover:text-red-400 hover:bg-red-500/[0.03]"
//                 : "text-gray-500 hover:text-red-500 hover:bg-red-50"
//             }`}
//           >

//             <span className="text-lg">
//               ↪
//             </span>

//             Logout

//           </button>

//         </div>

//       </aside>

//       {/* =====================================================
//           MAIN
//       ===================================================== */}

//       <main className="relative z-10 flex-1 min-w-0 overflow-y-auto">

//         <div className="max-w-[1450px] mx-auto px-6 md:px-10 py-8">

//           {/* =================================================
//               TOP HEADER
//           ================================================= */}

//           <header className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-9">

//             <div />

//             <div className="flex items-center gap-4">

//               {/* DARK / LIGHT */}

//               <button
//                 type="button"
//                 onClick={() =>
//                   setDarkMode((current) => !current)
//                 }
//                 aria-label={
//                   darkMode
//                     ? "Switch to light mode"
//                     : "Switch to dark mode"
//                 }
//                 className={`flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-all duration-200 ${
//                   darkMode
//                     ? "border-white/[0.09] bg-white/[0.035] hover:bg-white/[0.07] text-gray-200"
//                     : "border-gray-200 bg-white hover:bg-gray-50 text-gray-700 shadow-sm"
//                 }`}
//               >

//                 <span
//                   className={`flex items-center justify-center w-7 h-7 rounded-lg ${
//                     darkMode
//                       ? "bg-purple-500/15 text-purple-300"
//                       : "bg-purple-50 text-purple-600"
//                   }`}
//                 >
//                   {darkMode ? "☀" : "☾"}
//                 </span>

//                 <span className="hidden sm:block text-xs font-medium">
//                   {darkMode ? "Light" : "Dark"}
//                 </span>

//                 <span
//                   className={`relative w-9 h-5 rounded-full p-0.5 transition ${
//                     darkMode
//                       ? "bg-purple-600"
//                       : "bg-gray-300"
//                   }`}
//                 >

//                   <span
//                     className={`block w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
//                       darkMode
//                         ? "translate-x-4"
//                         : "translate-x-0"
//                     }`}
//                   />

//                 </span>

//               </button>

//               {/* SHOP HEADER */}

//               <div className="flex items-center gap-4">

//                 <div className="text-right">

//                   <p
//                     className={`text-xs uppercase tracking-wider ${theme.muted}`}
//                   >
//                     Shop
//                   </p>

//                   <p className="text-sm font-semibold mt-1">
//                     Thambu Electronics
//                   </p>

//                 </div>

//                 <div
//                   className={`h-10 w-px ${
//                     darkMode
//                       ? "bg-white/[0.07]"
//                       : "bg-gray-200"
//                   }`}
//                 />

//                 <div
//                   className={`text-xs px-3 py-1.5 rounded-full border ${
//                     darkMode
//                       ? "border-purple-500/20 bg-purple-500/10 text-purple-300"
//                       : "border-purple-200 bg-purple-50 text-purple-600"
//                   }`}
//                 >
//                   Merchant
//                 </div>

//               </div>

//             </div>

//           </header>

//           {/* =================================================
//               DYNAMIC PAGE
//           ================================================= */}

//           {renderPage()}

//           {/* FOOTER */}

//           <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 pb-8">

//             <p
//               className={`text-[10px] ${theme.muted}`}
//             >
//               Keep your stock updated so students can find
//               available products nearby.
//             </p>

//             <p
//               className={`text-[10px] ${theme.muted}`}
//             >
//               LocalLink AI · Merchant
//             </p>

//           </div>

//         </div>

//       </main>

//       {/* =====================================================
//           ADD / EDIT MODAL
//       ===================================================== */}

//       {showModal && (

//         <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/50 backdrop-blur-sm">

//           <div
//             className={`w-full max-w-md rounded-2xl border shadow-2xl ${
//               darkMode
//                 ? "bg-[#11111b] border-white/[0.08] text-white"
//                 : "bg-white border-gray-200 text-gray-900"
//             }`}
//           >

//             {/* HEADER */}

//             <div
//               className={`px-6 py-5 border-b ${
//                 darkMode
//                   ? "border-white/[0.06]"
//                   : "border-gray-100"
//               }`}
//             >

//               <div className="flex items-center justify-between">

//                 <div>

//                   <p className="text-[10px] uppercase tracking-[0.2em] text-purple-600 font-semibold">
//                     Inventory
//                   </p>

//                   <h3 className="text-lg font-semibold mt-1">
//                     {editingProduct
//                       ? "Edit Product"
//                       : "Add Product"}
//                   </h3>

//                 </div>

//                 <button
//                   onClick={() =>
//                     setShowModal(false)
//                   }
//                   className={`text-2xl ${
//                     darkMode
//                       ? "text-gray-500 hover:text-white"
//                       : "text-gray-400 hover:text-gray-700"
//                   }`}
//                 >
//                   ×
//                 </button>

//               </div>

//             </div>

//             {/* FORM */}

//             <form
//               onSubmit={saveProduct}
//               className="p-6 space-y-4"
//             >

//               {/* NAME */}

//               <div>

//                 <label className="block text-xs font-medium mb-2">
//                   Product Name
//                 </label>

//                 <input
//                   type="text"
//                   value={form.name}
//                   onChange={(event) =>
//                     setForm({
//                       ...form,
//                       name: event.target.value,
//                     })
//                   }
//                   placeholder="e.g. Arduino Uno"
//                   className={`w-full px-4 py-3 rounded-xl border text-sm outline-none ${
//                     darkMode
//                       ? "bg-white/[0.03] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-purple-500"
//                       : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-purple-300"
//                   }`}
//                 />

//               </div>

//               {/* CATEGORY */}

//               <div>

//                 <label className="block text-xs font-medium mb-2">
//                   Category
//                 </label>

//                 <input
//                   type="text"
//                   value={form.category}
//                   onChange={(event) =>
//                     setForm({
//                       ...form,
//                       category: event.target.value,
//                     })
//                   }
//                   placeholder="e.g. Microcontroller"
//                   className={`w-full px-4 py-3 rounded-xl border text-sm outline-none ${
//                     darkMode
//                       ? "bg-white/[0.03] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-purple-500"
//                       : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-purple-300"
//                   }`}
//                 />

//               </div>

//               {/* PRICE / QUANTITY */}

//               <div className="grid grid-cols-2 gap-4">

//                 <div>

//                   <label className="block text-xs font-medium mb-2">
//                     Price (₹)
//                   </label>

//                   <input
//                     type="number"
//                     min="0"
//                     value={form.price}
//                     onChange={(event) =>
//                       setForm({
//                         ...form,
//                         price: event.target.value,
//                       })
//                     }
//                     placeholder="450"
//                     className={`w-full px-4 py-3 rounded-xl border text-sm outline-none ${
//                       darkMode
//                         ? "bg-white/[0.03] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-purple-500"
//                         : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-purple-300"
//                     }`}
//                   />

//                 </div>

//                 <div>

//                   <label className="block text-xs font-medium mb-2">
//                     Quantity
//                   </label>

//                   <input
//                     type="number"
//                     min="0"
//                     value={form.quantity}
//                     onChange={(event) =>
//                       setForm({
//                         ...form,
//                         quantity: event.target.value,
//                       })
//                     }
//                     placeholder="10"
//                     className={`w-full px-4 py-3 rounded-xl border text-sm outline-none ${
//                       darkMode
//                         ? "bg-white/[0.03] border-white/[0.08] text-white placeholder:text-gray-600"
//                         : "bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400"
//                     }`}
//                   />

//                 </div>

//               </div>

//               {/* BUTTONS */}

//               <div className="flex gap-3 pt-3">

//                 <button
//                   type="button"
//                   onClick={() =>
//                     setShowModal(false)
//                   }
//                   className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium ${
//                     darkMode
//                       ? "border-white/[0.08] text-gray-400 hover:bg-white/[0.04]"
//                       : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-sm font-semibold hover:from-purple-700 hover:to-fuchsia-600 shadow-lg shadow-purple-500/20 transition"
//                 >
//                   {editingProduct
//                     ? "Save Changes"
//                     : "Add Product"}
//                 </button>

//               </div>

//             </form>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// }

// export default MerchantDashboard;