Ext.define('Earthquakes.view.main.Main', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Earthquakes.view.Grid',
        'Earthquakes.view.Map',
        'Earthquakes.view.main.MainModel',
        'Ext.plugin.Viewport'
    ],
    tabBar: {
        docked: 'bottom',
        layout: {
            pack: 'center'
        }
    },
    viewModel: {
        type: 'main'
    },
    title: 'Earthquakes in Iceland',
    items: [{
        title: 'Map',
        xtype: 'earthquakesmap',
        iconCls: 'x-fa fa-map',
        location: {
            latitude: 64.9312762,
            longitude: -19.021169
        },
        bind: {
            store: '{earthquakes}',
            selection: '{selection}'
        }
    }, {
        title: 'Grid',
        xtype: 'earthquakesgrid',
        iconCls: 'x-fa fa-th',
        bind: {
            store: '{earthquakes}',
            selection: '{selection}'
        }
    }]
});
