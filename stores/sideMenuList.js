export const useSideMenuList = defineStore("sideMenuList", {
  state: () => {
    return {
      userMenuList: [{
        icon: '~/assets/images/side-menu/icon-kelola-admin.svg',
        slug: 'kelola-admin',
        name: 'Kelola Admin'
      },{
        icon: '~/assets/images/side-menu/icon-kelola-pengguna.svg',
        slug: 'kelola-pengguna',
        name: 'Kelola Pengguna'
      }]
    };
  },
  actions: {
    setUserMenuList(value) {
      this.userMenuList = value;
    }
  },
  getters: {
    getUserMenuList: (state) => state.userMenuList
  },
})