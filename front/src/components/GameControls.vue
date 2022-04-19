<template>
  <q-table
    flat
    color="primary"
    :columns="columns"
    :rows="rows"
    table-header-class="text-primary"
    hide-bottom/>
</template>

<style lang="sass" scoped>

.customTable
  td:first-child
    background-color: #ff194b !important
.maxed
    margin-right:0
    margin-left:0
    width:100%

</style>

<script>
export default {
  name: 'GameControls',
  data() {
    return {
      columns: [
        {
          name: 'controls', label: 'Controls', field: 'controls', align: 'left',
        },
        {
          name: 'web', label: 'Web', field: 'web', align: 'left',
        },
        {
          name: 'mobile', label: 'Mobile', field: 'mobile', align: 'left',
        },
      ],
      rows: [
        { controls: 'Rotate', web: 'Arrow Up', mobile: 'Tap' },
        { controls: 'Move L/R', web: 'Arrow L/R', mobile: 'Swipe L/R' },
        { controls: 'Move Down', web: 'Arrow Down', mobile: 'Swipe Down' },
        { controls: 'Jump Down', web: 'Space Bar', mobile: '' },
      ],
    };
  },
};
</script>
