import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  '@global': {
    '.card240': {
      backgroundColor: theme.palette.background.dark,
      padding: theme.spacing(2),
      textAlign: 'center',
      '& h6': {
        color: theme.palette.text.light,
      },
      '& .MuiTypography-body1': {
        color: theme.palette.text.secondary,
      },
    },
    '.card241': {
      backgroundColor: theme.palette.background.primary,
      padding: theme.spacing(2),
      textAlign: 'center',
      '& h6': {
        color: theme.palette.text.bright,
      },
      '& .MuiTypography-body1': {
        color: theme.palette.text.secondary,
      },
    },
    '.card242': {
      backgroundColor: theme.palette.background.light,
      padding: theme.spacing(2),
      textAlign: 'center',
      '& h6': {
        color: theme.palette.secondary.dark,
      },
    },
    '.card244': {
      backgroundColor: theme.palette.background.secondary,
      padding: theme.spacing(2),
      textAlign: 'center',
      '& h6': {
        color: theme.palette.secondary.dark,
      },
    },
    '.card245': {
      backgroundColor: theme.palette.background.primary,
      alignItems: 'center',
      padding: "80px",
      margin: "80px",
      textAlign: 'left',
      '& h3': {
        color: theme.palette.text.bright,
        padding: "0",
        margin: "10",
      },
      '& h5': {
        color: theme.palette.text.secondary,
        padding: "0 ",
        margin: "0",
      },
      '& label': {
        fontSize: '30px',
        color: theme.palette.text.secondary,
      },
    },
    ".containerDefault": {
      backgroundColor: theme.palette.secondary.dark,
      minHeight: "500px",
    },
    ".containerGray": {
      backgroundColor: theme.palette.background.secondary,
      minHeight: "500px",
    },
    ".containerWorld": {
      backgroundColor: theme.palette.secondary.dark,
      backgroundImage: 'url(/images/world-view.png)',
      backgroundRepeat: 'no-repeat',
      minHeight: "500px",
    },
    '.frame223': {
      backgroundColor: theme.palette.background.secondary,
    },
    '.frame222': {
      backgroundColor: theme.palette.background.dark,
      '& p': {
        color: theme.palette.text.secondary,
      },
    },
    '.frame226': {
      backgroundColor: theme.palette.background.primary,
      '& p': {
        color: theme.palette.text.secondary,
      },
    },
    '.boxBackground':{
      backgroundColor: theme.palette.background.primary,
    },
  },
}))

export default useStyles
