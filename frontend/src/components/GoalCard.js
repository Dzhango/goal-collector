import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}))
export default function GoalCard(props){

    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.card.Title}
                            </Typography>
                <Typography>
                    {props.card.Desc}
                            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    View
                            </Button>
                <Button size="small" color="primary">
                    Edit
                            </Button>
            </CardActions>
        </Card>
    )

}