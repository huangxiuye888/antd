<template>
  <div class="about">
    <div>我是展示SVG图标
      <div>
        <svg-icon icon-class="weixin"/>
      </div>
    </div>
    <Table :tableData="tableData" :colunms="colunms">
      <template #name="{row, column, $index}">
        <el-button @click="handlerClick(row, column, $index)">{{row.name}}</el-button>
      </template>
    </Table>
  </div>
</template>
<script>
import Table from "com/table";
export default {
  components: { Table },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      colunms: [
        {
          prop: "date",
          name: "日期",
          width: 180,
        },
        {
          prop: "name",
          name: "姓名",
          width: 300,
          slot: "true",
        },
        {
          prop: "address",
          name: "地址",
          width: 500,
        },
      ],
    };
  },
  mounted(){
    console.log(process.env.VUE_APP_DONG)
  },
  methods: {
    handlerClick(row, column, $index) {
      console.log(row, column, $index);
    },
  },
};
</script>