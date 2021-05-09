const hello = {
  state:() => ({
    name:'hello',
    age:18
  }),
  getters:{
    extendName: state => {
      return state.name + '-getters';
    }
  },
  mutations:{//必须是同步函数,payload是一个对象
    increateAge(state, payload){
      console.log('mu',payload)
      state.age += payload.num;
    }
  },
  actions:{
    asyncIncreateAge(context, payload){
      setTimeout( ()=> {
        context.commit('increateAge',payload);
      },2000);
    }
  }

}

export default hello;