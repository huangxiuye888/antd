  <template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="item in colunms"
      :key="item.prop"
      :prop="item.prop"
      :label="item.name"
      :width="item.width"
    >
      <template v-if="item.slot" #default="scope">
        <slot :name="item.prop" v-bind="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

  <script>
export default {
  props: {
    tableData: {
      typeof: Array,
      default: () => [],
    },
    colunms: {
      typeof: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>