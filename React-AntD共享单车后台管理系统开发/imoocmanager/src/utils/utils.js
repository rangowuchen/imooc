/*
 * @Author: wuchen
 * @Date: 2020-01-10 11:40:49
 * @LastEditors  : wuchen
 * @LastEditTime : 2020-01-10 11:59:36
 * @Description: 
 * @Email: rangowu@163.com
 */
export default {
    formatDate(time){
        if(!time) return '';
        let date = new Date(time);
        let month = (date.getMonth()+1) <10 ? ('0' + (date.getMonth()+1)) : (date.getMonth()+1);
        let days = date.getDate() < 10 ? ('0' +date.getDate()):date.getDate();
        let hours = date.getHours() < 10 ? ('0' + date.getHours()):date.getHours();
        let minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()):date.getMinutes();
        let seconds = date.getSeconds()<10?('0'+date.getSeconds()):date.getSeconds();
        return date.getFullYear()+ '-' + month + '-' + days + ' '+ hours + ':' + minutes + ':' + seconds;
    }
}