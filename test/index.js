const $t = s => s

const key = 'key'

$t('示范')
$h('示范2' + key)
$h(key + '示范3')
$tt(`示范4${key}`)
$t('示范5{key}', {key})