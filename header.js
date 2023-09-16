
export function initializeHeader() {
    var menuItems = [].slice.call(document.querySelectorAll('.menu__item')),
    menuSubs = [].slice.call(document.querySelectorAll('.dropdown-menu')),
    selectedMenu = undefined,
    subBg = document.querySelector('.dropdown__bg'),
    subBgBtm = document.querySelector('.dropdown__bg-bottom'),
    subArr = document.querySelector('.dropdown__arrow'),
    subCnt = document.querySelector('.dropdown__wrap'),
    header = document.querySelector('.main-header'),
    closeDropdownTimeout,


    startCloseTimeout = function () {
        closeDropdownTimeout = setTimeout(() => closeDropdown(), 50);
    },

    stopCloseTimeout = function () {
        clearTimeout(closeDropdownTimeout);
    },

    openDropdown = function (el) {

        //- get menu ID
        var menuId = el.getAttribute('data-sub');
        //- get related sub menu
        var menuSub = document.querySelector('.dropdown-menu[data-sub="' + menuId + '"]');
        //- get menu sub content
        var menuSubCnt = menuSub.querySelector('.dropdown-menu__content');
        //- get bottom section of current sub
        var menuSubBtm = menuSubCnt.querySelector('.bottom-section').getBoundingClientRect();
        //- get height of top section
        var menuSubTop = menuSubCnt.querySelector('.top-section').getBoundingClientRect();
        //- get menu position
        var menuMeta = el.getBoundingClientRect();
        //- get sub menu position
        var subMeta = menuSubCnt.getBoundingClientRect();


        //- set selected menu
        selectedMenu = menuId;

        //- Remove active Menu
        menuItems.forEach(el => el.classList.remove('active'));
        //- Set current menu to active
        el.classList.add('active');

        //- Remove active sub menu
        menuSubs.forEach(el => el.classList.remove('active'));
        menuSubs.forEach(el => el.style.pointerEvents = "none");
        //- Set current menu to active
        menuSub.classList.add('active');
        menuSub.style.pointerEvents = "auto";

        //- Set dropdown menu background style to match current submenu style
        subBg.style.opacity = 1;
        subBg.style.pointerEvents = "auto";
        subBg.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
        subBg.style.width = subMeta.width + 'px';
        subBg.style.height = subMeta.height + 'px';

        //- Set dropdown menu bottom section background position
        subBgBtm.style.top = menuSubTop.height + 'px';
        console.log(menuSubBtm);

        //- Set Arrow position
        subArr.style.opacity = 1;
        subArr.style.pointerEvents = "auto";
        subArr.style.left = menuMeta.left + menuMeta.width / 2 - 10 + 'px';

        //- Set sub menu style
        subCnt.style.opacity = 1;
        subCnt.style.pointerEvents = "auto";
        subCnt.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
        subCnt.style.width = subMeta.width + 'px';
        subCnt.style.height = subMeta.height + 'px';

        //- Set current sub menu style
        menuSub.style.opacity = 1;

        header.classList.add('dropdown-active');

    },
    closeDropdown = function () {

        //- Remove active class from all menu items
        menuItems.forEach(el => el.classList.remove('active'));
        //- Remove active class from all sub menus
        menuSubs.forEach(el => {
            el.classList.remove('active');
            el.style.opacity = 0;
            el.style.pointerEvents = "none";

            subBg.style.pointerEvents = "none";
            subArr.style.pointerEvents = "none";
            subCnt.style.pointerEvents = "none";
        });
        //- set sub menu background opacity
        subBg.style.opacity = 0;
        //- set arrow opacity
        subArr.style.opacity = 0;


        // unset selected menu
        selectedMenu = undefined;

        header.classList.remove('dropdown-active');
    };


    //- Binding mouse event to each menu items
    menuItems.forEach(el => {

        //- mouse enter event
        el.addEventListener('mouseenter', function () {
            stopCloseTimeout();
            openDropdown(this);
        }, false);

        //- mouse leave event
        el.addEventListener('mouseleave', () => startCloseTimeout(), false);

    });

    //- Binding mouse event to each sub menus
    menuSubs.forEach(el => {

        el.addEventListener('mouseenter', () => stopCloseTimeout(), false);
        el.addEventListener('mouseleave', () => startCloseTimeout(), false);

    });
}
