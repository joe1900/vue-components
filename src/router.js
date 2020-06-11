/*
 * @Description: 
 * @Date: 2019-12-04 11:38:58
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-06-10 15:39:25
 */
import Vue from 'vue'
import Router from 'vue-router'
import LogIn from './components/LogIn/LogIn.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'LogIn',
            component: LogIn
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('./views/About.vue'),
            children: [{
                    path: '/PatientList',
                    name: 'PatientList',
                    component: () =>
                        import ('./components/PatientList/PatientList.vue'),
                    meta: {
                        status: true,
                        name: '患者列表',
                        previous: { name: "首页", path: "/" },
                        next: { name: "患者列表", path: "/PatientList" }
                    }
                },
                {
                    path: '/DoctorList',
                    name: 'DoctorList',
                    component: () =>
                        import ('./components/DoctorList/DoctorList.vue')
                },
                {
                    path: '/DoctorCollate',
                    name: 'DoctorCollate',
                    component: () =>
                        import ('./components/DoctorCollate/DoctorCollate.vue')
                },
            ]
        },
        {
            path: '/test1',
            name: 'test1',
            component: () =>
                import ('./components/PatientList/test1.vue')
        },
        {
            path: '/test2',
            name: 'test2',
            component: () =>
                import ('./components/PatientList/test2.vue')
        },
        {
            path: '/test3',
            name: 'test3',
            component: () =>
                import ('./components/PatientList/test3.vue')
        },
        {
            path: '/test4',
            name: 'test4',
            component: () =>
                import ('./components/PatientList/test4.vue')
        },
        {
            path: '/test5',
            name: 'test5',
            component: () =>
                import ('./components/PatientList/test5.vue')
        },
        {
            path: '/test6',
            name: 'test6',
            component: () =>
                import ('./components/PatientList/test6.vue')
        },
        {
            path: '/test7',
            name: 'test7',
            component: () =>
                import ('./components/PatientList/test7.vue')
        },
        {
            path: '/test8',
            name: 'test8',
            component: () =>
                import ('./components/PatientList/test8.vue')
        },
        {
            path: '/test9',
            name: 'test9',
            component: () =>
                import ('./components/PatientList/test9.vue')
        },
        {
            path: '/test10',
            name: 'test10',
            component: () =>
                import ('./components/PatientList/test10.vue')
        },
        {
            path: '/test11',
            name: 'test11',
            component: () =>
                import ('./components/PatientList/test11.vue')
        },
        {
            path: '/test12',
            name: 'test12',
            component: () =>
                import ('./components/PatientList/test12.vue')
        },
        {
            path: '/test13',
            name: 'test13',
            component: () =>
                import ('./components/PatientList/test13.vue')
        },
        {
            path: '/test14',
            name: 'test14',
            component: () =>
                import ('./components/PatientList/test14.vue')
        },
        {
            path: '/test15',
            name: 'test15',
            component: () =>
                import ('./components/PatientList/test15.vue')
        },
        {
            path: '/test16',
            name: 'test16',
            component: () =>
                import ('./components/PatientList/test16.vue')
        },
        {
            path: '/test17',
            name: 'test17',
            component: () =>
                import ('./components/PatientList/test17.vue')
        },
        {
            path: '/test18',
            name: 'test18',
            component: () =>
                import ('./components/PatientList/test18.vue')
        },
        {
            path: '/test19',
            name: 'test19',
            component: () =>
                import ('./components/PatientList/test19.vue')
        },
        {
            path: '/test20',
            name: 'test20',
            component: () =>
                import ('./components/PatientList/test20.vue')
        },
        {
            path: '/test21',
            name: 'test21',
            component: () =>
                import ('./components/PatientList/test21.vue')
        },
        {
            path: '/test22',
            name: 'test22',
            component: () =>
                import ('./components/PatientList/test22.vue')
        },
        {
            path: '/test23',
            name: 'test23',
            component: () =>
                import ('./components/PatientList/test23.vue')
        },
        {
            path: '/test24',
            name: 'test24',
            component: () =>
                import ('./components/PatientList/test24.vue')
        },
        {
            path: '/test25',
            name: 'test25',
            component: () =>
                import ('./components/PatientList/test25.vue')
        },
        {
            path: '/test26',
            name: 'test26',
            component: () =>
                import ('./components/PatientList/test26.vue')
        },
        {
            path: '/test27',
            name: 'test27',
            component: () =>
                import ('./components/PatientList/test27.vue')
        },
        {
            path: '/test28',
            name: 'test28',
            component: () =>
                import ('./components/PatientList/test28.vue')
        },
        {
            path: '/test29',
            name: 'test29',
            component: () =>
                import ('./components/PatientList/test29.vue')
        },
        {
            path: '/test30',
            name: 'test30',
            component: () =>
                import ('./components/PatientList/test30.vue')
        },
        {
            path: '/test31',
            name: 'test31',
            component: () =>
                import ('./components/PatientList/QR.vue')
        },
        {
            path: '/test32',
            name: 'ws',
            component: () =>
                import ('./components/PatientList/ws.vue')
        }
    ]
})