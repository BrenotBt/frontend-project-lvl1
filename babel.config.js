/**
 * Created by Tolstenko Alexander on 05.12.2019.
 */

module.exports = {
    presets: [
        ['@babel/env', {
            targets: {
                node: 'current',
                firefox: '60',
                chrome: '67',
                safari: '11.1',
            },
        }],
    ],
};