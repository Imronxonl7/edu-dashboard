let content = document.getElementById("teacher-cards");
async function getData() {
    try{
        let res = await axios.get("https://69243f273ad095fb84735a27.mockapi.io/teachers")
        
        console.log(res.data);
        res.data.map((el) => {
          content.innerHTML += `
          <div id="teacher-card"
       class="text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 
              cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 
              group">

    <!-- Avatar va asosiy ma'lumotlar -->
    <div class="flex flex-col items-center text-center mb-4">
      <span class="relative flex size-20 shrink-0 overflow-hidden rounded-full ring-4 ring-blue-100 mb-4">
        <img src=${el.avatar}
             alt="Luther Waelchi" 
             class="w-full h-full object-cover">
      </span>

      <h3 class="text-xl font-bold text-gray-900">${el.name}</h3>
      
      <span class="mt-2 inline-flex items-center rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
        ${el.profession}
      </span>

      <!-- Yosh va o'quvchilar soni -->
      <div class="flex items-center gap-6 mt-4 text-gray-600">
        <span class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            <rect x="2" y="6" width="20" height="14" rx="2"></rect>
          </svg>
          ${el.age} yosh
        </span>
        <span class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M16 3.128a4 4 0 0 1 0 7.744"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          </svg>
          53 o'quvchi
        </span>
      </div>

      <!-- Reyting -->
      <div class="flex items-center gap-1 mt-3">
        <svg class="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
        <span class="font-semibold text-gray-900">${el.rating}</span>
      </div>
    </div>

    <!-- Kontakt ma'lumotlari -->
    <div class="space-y-3 text-sm">
      <div class="flex items-center gap-3 text-gray-600">
        <svg class="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span class="truncate">${el.createdAt}</span>
      </div>

      <div class="flex items-center gap-3 text-gray-600">
        <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <span class="truncate">${el.luther}</span>
      </div>

      <div class="flex items-center gap-3 text-gray-600">
        <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10H3m9-8v8m5.5 8a9 9 0 10-9-9"></path>
        </svg>
        <span class="truncate">${el.science}</span>
      </div>

      <div class="flex items-center gap-3 text-gray-600">
        <svg class="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        <span class="truncate">${el.linkedin}</span>
      </div>
    </div>

    <!-- Tugmalar (hoverda ko'rinadi) -->
    <div class="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button class="flex-1 flex items-center justify-center gap-2 h-10 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
        </svg>
        Tahrirlash
      </button>

      <button class="flex-1 flex items-center justify-center gap-2 h-10 rounded-md bg-red-100 text-red-600 hover:bg-red-200 text-sm font-medium transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
        O'chirish
      </button>
    </div>
  </div>` 
        })
        
    }catch(err){

    }
    
  }
  getData();
    // // Active class
// // let activeClass =
// //   "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/50";

  

// function clearActive() {
//   document.querySelectorAll(".nav-item").forEach((btn) => {
//     btn.classList.remove(...activeClass.split(" "));
//   });

//   // Sahifalarni yashirish
//   document.querySelectorAll("#content > div").forEach((div) => div.classList.add("hidden"));
// }

// function loadDashboard() {
//   clearActive();
//   buttons.dashboard.classList.add(...activeClass.split(" "));
//   const dashboardDiv = document.getElementById("dashboardPage");
//   dashboardDiv.classList.remove("hidden");
//   dashboardDiv.innerHTML = `<h1 class="text-2xl font-bold mb-5">Dashboard</h1> ...`; // oldingi HTML
// }

// function loadTeachers() {
//   clearActive();
//   buttons.teachers.classList.add(...activeClass.split(" "));
//   const teachersDiv = document.getElementById("teachersPage");
//   teachersDiv.classList.remove("hidden");

//   // Mokapio’dan kelgan malumotlarni shu yerga render qilamiz
//   teachersDiv.innerHTML = ""; // avvalini tozalash
//   res.data.forEach(teacher => {
//       const card = document.createElement("div");
//       card.className = "teacher-card ..."; // Tailwind classlarni qo‘y
//       card.innerHTML = `
//         <h3>${teacher.name}</h3>
//         <p>${teacher.age} yosh</p>
//         <p>${teacher.students} o'quvchi</p>
//         <p>${teacher.email}</p>
//       `;
//       teachersDiv.appendChild(card);
//   });
// }
// }
// getData()
// // Sidebar buttonlar
// let buttons = {
//   dashboard: document.getElementById("btnDashboard"),
//   teachers: document.getElementById("btnTeachers"),
//   students: document.getElementById("btnStudents"),
//   settings: document.getElementById("btnSettings"),
// };

// // Barcha nav styleni tozalovchi funksiya
// function clearActive() {
//   document.querySelectorAll(".nav-item").forEach((btn) => {
//     btn.classList.remove(...activeClass.split(" "));
//   });
// }

// // Dashboard sahifasi
// function loadDashboard() {
//   clearActive();
//   buttons.dashboard.classList.add(...activeClass.split(" "));

//   content.innerHTML = `
//         <h1 class="text-2xl font-bold mb-5">School Management System</h1>

//         <div class="grid grid-cols-4 gap-6">

//             <div class="p-6 bg-white hover:shadow-xl duration-600 rounded-xl shadow">
//                 <p class="text-gray-500">Total Teachers</p>
//                 <div class="flex justify-between items-center">
//                 <h2 class="text-2xl font-bold">24</h2>
//                 <div class="p-3 rounded-lg bg-blue-50 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
//                 </div>
                
//             </div>

//             <div class="p-6 bg-white hover:shadow-xl duration-600 rounded-xl shadow">
//                 <p class="text-gray-500">Total Students</p>
//                 <div class="flex justify-between items-center">
//                 <h2 class="text-2xl font-bold">80</h2>
//                 <div class="p-3 rounded-lg bg-purple-50 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap h-6 w-6 text-purple-600 dark:text-purple-400" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg></div>                </div>
//             </div>

//             <div class="p-6 bg-white hover:shadow-xl duration-600 rounded-xl shadow">
//                 <p class="text-gray-500">Avg Teacher Rating</p>
//                 <div class="flex justify-between items-center">
//                 <h2 class="text-2xl font-bold">4.1</h2>
//                 <div class="p-3 rounded-lg bg-yellow-50 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star h-6 w-6 text-yellow-600 dark:text-yellow-400" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>            </div>
//             </div>

//             <div class="p-6 bg-white hover:shadow-xl duration-600 rounded-xl shadow">
//                 <p class="text-gray-500">Avg Student Rating</p>
//                 <div class="flex justify-between items-center">
//                 <h2 class="text-2xl font-bold">3.3</h2>
//                 <div class="p-3 rounded-lg bg-green-50 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></div>            </div>
//         </div>
//         </div>
    


//     <div class="grid grid-cols-2 mt-[30px] gap-8">

        // <!-- QUICK ACTIONS -->
        // <div class="bg-white p-6 rounded-xl shadow">
        //     <p class="text-lg font-semibold mb-4">Quick Actions</p>

        //     <!-- MANAGE TEACHERS -->
        //     <div class="w-full mb-4 p-5 rounded-xl cursor-pointer bg-gradient-to-r from-[#1965FE] to-[#0A5FFF]
        //      hover:from-[#0f4fd6] hover:to-[#0845d6]
        //      hover:shadow-xl
        //      transition-all duration-500 transform hover:scale-[1.02]">
                
        //         <div class="flex items-center gap-4">
        //             <!-- img -->
        //             <img src="/img/users.png" class="w-7 h-7" alt="">
                    
        //             <div>
        //                 <p class="font-semibold text-white">Manage Teachers</p>
        //                 <p class="text-white/80 text-sm">View and manage all teachers</p>
        //             </div>
        //         </div>
        //     </div>

        //     <!-- MANAGE STUDENTS -->
        //     <div class="w-full p-5 rounded-xl cursor-pointer bg-gradient-to-r from-[#9d25fd] to-[#7a1ee2]
        //      hover:from-[#8b1adf] hover:to-[#6a18c7]
        //      hover:shadow-xl
        //      transition-all duration-500 transform hover:scale-[1.02]">

        //         <div class="flex items-center gap-4">
        //             <!-- img -->
        //             <img src="/img/graduation-cap.png" class="w-7 h-7" alt="">

        //             <div>
        //                 <p class="font-semibold text-white">Manage Students</p>
        //                 <p class="text-white/80 text-sm">View and manage all students</p>
        //             </div>
        //         </div>
        //     </div>

        // </div>

//         <!-- RECENT ACTIVITY -->
//         <div class="bg-white p-6 rounded-xl shadow">
//             <p class="text-lg font-semibold mb-4">Recent Activity</p>

//             <ul class="space-y-4">
//                 <li class="flex items-start gap-3">
//                     <span class="w-3 h-3 bg-blue-500 rounded-full mt-1"></span>
//                     <div>
//                         <p class="font-medium">New teacher added</p>
//                         <p class="text-sm text-gray-500">2 hours ago</p>
//                     </div>
//                 </li>

//                 <li class="flex items-start gap-3">
//                     <span class="w-3 h-3 bg-green-500 rounded-full mt-1"></span>
//                     <div>
//                         <p class="font-medium">Student ratings updated</p>
//                         <p class="text-sm text-gray-500">5 hours ago</p>
//                     </div>
//                 </li>

//                 <li class="flex items-start gap-3">
//                     <span class="w-3 h-3 bg-purple-500 rounded-full mt-1"></span>
//                     <div>
//                         <p class="font-medium">New students enrolled</p>
//                         <p class="text-sm text-gray-500">1 day ago</p>
//                     </div>
//                 </li>
//             </ul>
//         </div>

//     </div>

//     `;
// }

// // Teachers sahifasi
// function loadTeachers() {
//   clearActive();
//   buttons.teachers.classList.add(...activeClass.split(" "));

//   content.innerHTML = `
//         <h1 class="text-2xl font-bold mb-5">Teachers</h1>
//         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
//   <!-- Bitta o'qituvchi kartochkasi -->
//   <div data-slot="card"
//        class="text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 
//               cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 
//               group">

//     <!-- Avatar va asosiy ma'lumotlar -->
//     <div class="flex flex-col items-center text-center mb-4">
//       <span class="relative flex size-20 shrink-0 overflow-hidden rounded-full ring-4 ring-blue-100 mb-4">
//         <img src="https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/74.jpg" 
//              alt="Luther Waelchi" 
//              class="w-full h-full object-cover">
//       </span>

//       <h3 class="text-xl font-bold text-gray-900">Luther Waelchi</h3>
      
//       <span class="mt-2 inline-flex items-center rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
//         History
//       </span>

//       <!-- Yosh va o'quvchilar soni -->
//       <div class="flex items-center gap-6 mt-4 text-gray-600">
//         <span class="flex items-center gap-1">
//           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
//                   d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
//             <rect x="2" y="6" width="20" height="14" rx="2"></rect>
//           </svg>
//           22 yosh
//         </span>
//         <span class="flex items-center gap-1">
//           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
//                   d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
//             <circle cx="9" cy="7" r="4"></circle>
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
//                   d="M16 3.128a4 4 0 0 1 0 7.744"></path>
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
//                   d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
//           </svg>
//           53 o'quvchi
//         </span>
//       </div>

//       <!-- Reyting -->
//       <div class="flex items-center gap-1 mt-3">
//         <svg class="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
//           <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
//         </svg>
//         <span class="font-semibold text-gray-900">4.6</span>
//       </div>
//     </div>

//     <!-- Kontakt ma'lumotlari -->
//     <div class="space-y-3 text-sm">
//       <div class="flex items-center gap-3 text-gray-600">
//         <svg class="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
//                 d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//         </svg>
//         <span class="truncate">+998 44 980 40 499</span>
//       </div>

//       <div class="flex items-center gap-3 text-gray-600">
//         <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//         </svg>
//         <span class="truncate">luther_waelchi@hotmail.com</span>
//       </div>

//       <div class="flex items-center gap-3 text-gray-600">
//         <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10H3m9-8v8m5.5 8a9 9 0 10-9-9"></path>
//         </svg>
//         <span class="truncate">@lutherwaelchi</span>
//       </div>

//       <div class="flex items-center gap-3 text-gray-600">
//         <svg class="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
//           <rect x="2" y="9" width="4" height="12"></rect>
//           <circle cx="4" cy="4" r="2"></circle>
//         </svg>
//         <span class="truncate">linkedin.com/in/luther-waelchi</span>
//       </div>
//     </div>

//     <!-- Tugmalar (hoverda ko'rinadi) -->
//     <div class="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//       <button class="flex-1 flex items-center justify-center gap-2 h-10 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium transition">
//         <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
//         </svg>
//         Tahrirlash
//       </button>

//       <button class="flex-1 flex items-center justify-center gap-2 h-10 rounded-md bg-red-100 text-red-600 hover:bg-red-200 text-sm font-medium transition">
//         <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
//         </svg>
//         O'chirish
//       </button>
//     </div>
//   </div>
   
//   <!-- Kartochka tugadi -->
// </div>
//     `;
// }

// // Students sahifasi
// function loadStudents() {
//   clearActive();
//   buttons.students.classList.add(...activeClass.split(" "));

//   content.innerHTML = `
//         <h1 class="text-2xl font-bold mb-5">Students</h1>
//         <p class="text-gray-500">Students list...</p>
//     `;
// }

// // Settings sahifasi
// function loadSettings() {
//   clearActive();
//   buttons.settings.classList.add(...activeClass.split(" "));

//   content.innerHTML = `
//         <h1 class="text-2xl font-bold mb-5">Settings</h1>
//         <p class="text-gray-500">Settings content...</p>
//     `;
// }

// // --- EVENT LISTENERS ---
// buttons.dashboard.onclick = loadDashboard;
// buttons.teachers.onclick = loadTeachers;
// buttons.students.onclick = loadStudents;
// buttons.settings.onclick = loadSettings;

// // ✅ Default page (foydalanuvchi kirganda Dashboard ochiladi)
// loadDashboard()