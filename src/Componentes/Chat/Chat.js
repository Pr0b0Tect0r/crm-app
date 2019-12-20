import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CometChat } from '@cometchat-pro/chat';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
import Snackbar from '@material-ui/core/Snackbar';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import CallEndOutlinedIcon from '@material-ui/icons/CallEndOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(10)
	},
	close: {
		padding: theme.spacing(0.5)
	},
	appBar: {
		position: 'fixed'
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	'@keyframes blinker': {
		'0%': { opacity: 1 },
		'50%': { opacity: .2 },
		'100%': { opacity: 1 }
	},
	avatar: {
		height: 50,
		width: 50,
		animation: '$blinker 1s infinite'
	},
	linea: {
		width: '105%'
	},
	chatRight: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	me: {
		backgroundColor: theme.palette.primary.main,
		margin: 4,
		borderRadius: '10px 10px 0 10px',
		color: theme.palette.getContrastText(theme.palette.primary.main)
	},
	listame: {
		position: 'flex',
		justifyContent: 'flex-end'
	},
	them: {
		backgroundColor: theme.palette.secondary.main,
		margin: 4,
		borderRadius: '0 10px 10px 10px',
		color: theme.palette.getContrastText(theme.palette.secondary.main)
	},
	listathem: {
		position: 'flex',
		justifyContent: 'flex-start'
	},
	textoMensaje: {
		[`& fieldset`]: {
			borderRadius: 50,
		}
	},
	listaGeneral: {
		top: theme.spacing(7),
		width: '100%',
		position: 'fixed',
		overflow: 'auto',
		maxHeight: '80%'
	},
	grid: {
		position: 'fixed',
		left: theme.spacing(1),
		bottom: theme.spacing(4),
		width: '100%'
	},
	grid2: {
		height: '80%'
	},
	message: {
		display: 'flex',
		alignItems: 'center'
	},
	avatarMensaje: {
		marginRight: theme.spacing(1)
	},
	speedLlamadas: {
		position: 'fixed',
		top: theme.spacing(1.3),
		right: theme.spacing(2),

	},
	div: {
		position: 'absolute',
		width: '100%',
		height: '100%'
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function Chat() {
	const [friends, setFriends] = React.useState([])
	const [friendisLoading, setFriendisLoading] = React.useState(true)
	const [selectedFriend, setSelectedFriend] = React.useState(null);
	const [selectedAvatar, setSelectedAvatar] = React.useState(null);
	const [chat, setChat] = React.useState([]);
	const [chatIsLoading, setChatIsLoading] = React.useState(false)
	const [dialogEvento, setDialogEvento] = React.useState(false)
	const [mensaje, setMensaje] = React.useState(null)
	const [notificacion, setNotificacion] = React.useState(false)
	const [notificacion2, setNotificacion2] = React.useState(false)
	const [infoNotificacion, setInfoNotificacion] = React.useState({})
	const [speedLlamadas, setSpeedLlamadas] = React.useState(false)
	const [dialogSaliente, setDialogSaliente] = React.useState(false)
	const [idSaliente, setIdSaliente] = React.useState(null)
	const [dialogEntrante, setDialogEntrante] = React.useState(false)
	const [idEntrante, setIdEntrante] = React.useState(null)
	const [avatarEntrante, setAvatarEntrante] = React.useState(null)
	const [llamadaPantalla, setLlamadaPantalla] = React.useState(false)
	const MESSAGE_LISTENER_KEY = 'listener-key'
	const listenerID = "UNIQUE_LISTENER_ID";
	const limit = 30
	const classes = useStyles()
	const user = JSON.parse(localStorage.getItem('usuarioChat'))
	const botonLlamadas = [
		{ name: 'Audio' },
		{ name: 'Video' }
	]

	const selectFriend = (uid, avatar) => {
		setSelectedFriend(uid);
		setSelectedAvatar(avatar);
		setChatIsLoading(true);
		setDialogEvento(true);
	}

	const handleCloseDialogEvento = () => {
		setDialogEvento(false);
		setSelectedFriend(null);
	};

	const enviarMensaje = () => {
		var textMessage = new CometChat.TextMessage(selectedFriend, mensaje, CometChat.RECEIVER_TYPE.USER, CometChat.MESSAGE_TYPE.TEXT)
		CometChat.sendMessage(textMessage).then(
			message => {
				setChat([...chat, message]);
				scrollBottom()
			},
			error => {
				console.log('No se pudo enviar el mensaje:', error);
			}
		);
	}

	const tecla = (e) => {
		if (e.keyCode === 13) {
			enviarMensaje()
			var campo = document.activeElement
			campo.value = ''
		}
	}

	const scrollBottom = () => {
		var node = document.getElementById("lista");
		const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
		if (!bottom) {
			node.scrollTop = node.scrollHeight;
		}
	}

	const llamar = () => {
		setDialogSaliente(true)

		var call = new CometChat.Call(selectedFriend, CometChat.CALL_TYPE.AUDIO, CometChat.RECEIVER_TYPE.USER);

		CometChat.initiateCall(call).then(
			outGoingCall => {
				var llamada = [outGoingCall]
				setIdSaliente(llamada[0].sessionId)
			},
			error => {
				console.log("Ha fallado el inicio de llamada: ", error);
			}
		);
	}

	const cancelarLlamar = () => {
		setDialogSaliente(false)

		CometChat.rejectCall(idSaliente, CometChat.CALL_STATUS.CANCELLED).then(
			() => {
				setIdSaliente(null)
			},
			error => {
				console.log("Error al cancelar llamada: ", error);
			}
		);
	};

	const aceptarLlamadaEntrante = () => {
		setDialogEntrante(false)

		CometChat.acceptCall(idEntrante).then(
			() => {
				setLlamadaPantalla(true)
				CometChat.startCall(idEntrante, document.getElementById("callScreen"),
					new CometChat.OngoingCallListener({
						onCallEnded: call => {
							setLlamadaPantalla(false)
						}
					}))
			},
			error => {
				console.log("Error al aceptar la llamada: ", error);
			}
		);
	}

	const cancelarLlamadaEntrante = () => {
		setDialogEntrante(false)

		CometChat.rejectCall(idEntrante, CometChat.CALL_STATUS.CANCELLED).then(
			() => {
			},
			error => {
				console.log("Error al rechazar llamada: ", error);
			}
		);
	}

	const videoLlamar = () => {
		setDialogSaliente(true)

		var call = new CometChat.Call(selectedFriend, CometChat.CALL_TYPE.VIDEO, CometChat.RECEIVER_TYPE.USER);

		CometChat.initiateCall(call).then(
			outGoingCall => {
				var llamada = [outGoingCall]
				setIdSaliente(llamada[0].sessionId)
			},
			error => {
				console.log("Ha fallado el inicio de llamada: ", error);
			}
		);
	}

	React.useEffect(() => {
		let usersRequest = new CometChat.UsersRequestBuilder()
			.setLimit(limit)
			.build();

		usersRequest.fetchNext().then(
			userList => {
				setFriends(userList);
				setFriendisLoading(false);
			},
			error => {
				console.log('Error al recibir lista: ', error);
			}
		);

		return () => {
			CometChat.removeMessageListener(MESSAGE_LISTENER_KEY);
		};
	}, []);

	React.useEffect(() => {
		CometChat.addCallListener(
			listenerID,
			new CometChat.CallListener({
				onIncomingCallReceived(call) {
					var llamadaEntrante = [call]
					setAvatarEntrante(llamadaEntrante[0].callInitiator.avatar)
					setDialogEntrante(true)
					setIdEntrante(llamadaEntrante[0].sessionId)
				},

				onOutgoingCallAccepted(call) {
					var sessionID = call.sessionID;

					CometChat.startCall(sessionID, document.getElementById("callScreen"),
						new CometChat.OngoingCallListener({
							onUserJoined: () => {
							},
							onUserLeft: () => {
								setLlamadaPantalla(false)
							},
							onCallEnded: () => {
								setLlamadaPantalla(false)
							}
						})
					);
				},

				onOutgoingCallRejected: () => {
					setDialogSaliente(false)
				},
				onIncomingCallCancelled: () => {
					setDialogEntrante(false)
				}
			})
		);

		CometChat.addMessageListener(listenerID,
			new CometChat.MessageListener({
				onTextMessageReceived: message => {
					setInfoNotificacion({ avatar: message.sender.avatar, texto: message.text, nombre: message.sender.uid })
					setNotificacion(true)
				},
				onMediaMessageReceived: () => {
				}
			})
		);

		CometChat.addUserListener(
			listenerID,
			new CometChat.UserListener({
				onUserOnline: onlineUser => {
					setInfoNotificacion({ avatar: onlineUser.avatar, nombre: onlineUser.uid })
					let usersRequest = new CometChat.UsersRequestBuilder()
						.setLimit(limit)
						.build();

					usersRequest.fetchNext().then(
						userList => {
							setFriends(userList);
							setFriendisLoading(false);
						},
						error => {
							console.log('Error al recibir lista: ', error);
						}
					);
					setNotificacion2(true)
				},
				onUserOffline: () => {
					let usersRequest = new CometChat.UsersRequestBuilder()
						.setLimit(limit)
						.build();

					usersRequest.fetchNext().then(
						userList => {
							setFriends(userList);
							setFriendisLoading(false);
						},
						error => {
							console.log('Error al recibir lista: ', error);
						}
					);
				}
			})
		);

		if (selectedFriend) {
			let messagesRequest = new CometChat.MessagesRequestBuilder()
				.setUID(selectedFriend)
				.setLimit(limit)
				.build();

			messagesRequest.fetchPrevious().then(
				messages => {
					setChat(messages);
					setChatIsLoading(false);
					scrollBottom()
				},
				error => {
					console.log('Error la recibir mensajes:', error);
				}
			);

			CometChat.removeMessageListener(MESSAGE_LISTENER_KEY);

			CometChat.addCallListener(listenerID,
				new CometChat.CallListener({
					onIncomingCallReceived(call) {
						var llamadaEntrante = [call]
						setAvatarEntrante(llamadaEntrante[0].callInitiator.avatar)
						setDialogEntrante(true)
						setIdEntrante(llamadaEntrante[0].sessionId)
					},

					onOutgoingCallAccepted(call) {
						var sessionID = call.sessionID;
						setDialogSaliente(false)
						setLlamadaPantalla(true)

						CometChat.startCall(sessionID, document.getElementById("callScreen"),
							new CometChat.OngoingCallListener({
								onUserJoined: () => {
								},
								onUserLeft: () => {
									setLlamadaPantalla(false)
								},
								onCallEnded: () => {
									setLlamadaPantalla(false)
								}
							})
						);
					},

					onOutgoingCallRejected: () => {
						setDialogSaliente(false)
					},
					onIncomingCallCancelled: () => {
						setDialogEntrante(false)
						setDialogSaliente(false)
					}
				})
			);

			CometChat.addMessageListener(listenerID,
				new CometChat.MessageListener({
					onTextMessageReceived: message => {
						if (selectedFriend === message.sender.uid) {
							setChat(prevState => [...prevState, message]);
							scrollBottom()
						}
					},
					onMediaMessageReceived: mediaMessage => {
						if (selectedFriend === mediaMessage.sender.uid) {
							setChat(prevState => [...prevState, mediaMessage]);
						}
					},
				})
			);
		}
	}, [selectedFriend]);

	if (friendisLoading) {
		return (
			<Box position="absolute" top="50%" left="50%">
				<CircularProgress color='primary' />
			</Box>
		);
	} else {
		return (
			<React.Fragment>
				<CssBaseline />
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={notificacion}
					TransitionComponent={Transition}
					autoHideDuration={3000}
					onClose={() => setNotificacion(false)}
					style={{ opacity: '0.9' }}
					ContentProps={{ 'aria-describedby': 'mensaje' }}
					message={<Typography variant='button' className={classes.message}>
						<Avatar src={infoNotificacion.avatar} alt='...' className={classes.avatarMensaje} />
						{infoNotificacion.texto}
					</Typography>}
					action={[
						<IconButton
							key="close"
							aria-label="close"
							color="inherit"
							className={classes.close}
							onClick={() => setNotificacion(false)}
						>
							<CloseIcon />
						</IconButton>,
					]}
				/>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={notificacion2}
					TransitionComponent={Transition}
					autoHideDuration={3000}
					onClose={() => setNotificacion2(false)}
					style={{ opacity: '0.9' }}
					ContentProps={{ 'aria-describedby': 'mensaje' }}
					message={<Typography variant='button' className={classes.message}>
						<Avatar src={infoNotificacion.avatar} alt='...' className={classes.avatarMensaje} />
						{`${infoNotificacion.nombre} se ha conectado`}
					</Typography>}
					action={[
						<IconButton
							key="close"
							aria-label="close"
							color="inherit"
							className={classes.close}
							onClick={() => setNotificacion2(false)}
						>
							<CloseIcon />
						</IconButton>,
					]}
				/>
				<Dialog fullWidth open={dialogSaliente} onClose={() => setDialogSaliente(false)} TransitionComponent={Transition}>
					<DialogTitle><Typography variant='button'>Llamando...</Typography></DialogTitle>
					<DialogContent><Avatar src={selectedAvatar} alt='...' className={classes.avatar} /></DialogContent>
					<DialogActions><Button color="secondary" onClick={() => cancelarLlamar()}>Cancelar</Button></DialogActions>
				</Dialog>
				<Dialog fullWidth open={dialogEntrante} onClose={() => setDialogEntrante(false)} TransitionComponent={Transition}>
					<DialogTitle><Typography variant='button'>Llamanda entrante...</Typography></DialogTitle>
					<DialogContent><Avatar src={avatarEntrante} alt='...' className={classes.avatar} /></DialogContent>
					<DialogActions>
						<Button color="secondary" onClick={() => cancelarLlamadaEntrante()}>Cancelar</Button>
						<Button color="primary" variant='contained' onClick={() => aceptarLlamadaEntrante()}>Aceptar</Button>
					</DialogActions>
				</Dialog>
				<Dialog fullScreen open={llamadaPantalla} onClose={() => setLlamadaPantalla(false)} TransitionComponent={Transition}>
					<div id='callScreen' className={classes.div} />
				</Dialog>
				<Dialog fullScreen open={dialogEvento} onClose={handleCloseDialogEvento} TransitionComponent={Transition}>
					<AppBar className={classes.appBar}>
						<Toolbar>
							<IconButton edge="start" color="inherit" onClick={handleCloseDialogEvento} aria-label="cerrar">
								<CloseIcon />
							</IconButton>
							<Avatar src={selectedAvatar} />
							<Typography variant="h6" className={classes.title}>
								{`${selectedFriend}`}
							</Typography>
							<SpeedDial
								className={classes.speedLlamadas}
								direction='down'
								FabProps={{ size: 'small', color: 'secondary' }}
								ariaLabel="Llamadas"
								icon={<CallEndOutlinedIcon />}
								onClose={() => setSpeedLlamadas(false)}
								onOpen={() => setSpeedLlamadas(true)}
								open={speedLlamadas}>

								{botonLlamadas.map(action => (
									<SpeedDialAction
										key={action.name}
										icon={action.name === 'Audio' ? <CallOutlinedIcon /> : action.name === 'Video' ? <VideocamOutlinedIcon /> : ''}
										tooltipTitle={action.name}
										onClick={action.name === 'Audio' ? () => llamar() : action.name === 'Video' ? () => videoLlamar() : ''}
									/>
								))}
							</SpeedDial>
						</Toolbar>
						{chatIsLoading ?
							<LinearProgress color='secondary' className={classes.linea} />
							: null}
					</AppBar>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<List className={classes.listaGeneral} id='lista'>
								{chatIsLoading ? null :
									chat.map((mensajes, index) => (
										mensajes.receiverId !== user.uid ?
											<Zoom in={true} timeout={500} key={index}>
												<ListItem key={index} className={classes.listame}>
													<Paper elevation={4} className={classes.me}>
														<Typography variant='body1' style={{ padding: 6 }}>{mensajes.type === 'text' ? mensajes.text :
															mensajes.type === 'audio' ? `${mensajes.sender.uid} te llamó` :
																mensajes.type === 'video' ? `${mensajes.sender.uid} te llamó` : ''}</Typography>
													</Paper>
													<Avatar src={user.avatar} alt='...' />
												</ListItem>
											</Zoom> :
											<Zoom in={true} timeout={500} key={index}>
												<ListItem key={index} className={classes.listathem}>
													<Avatar src={selectedAvatar} alt='...' />
													<Paper elevation={4} className={classes.them}>
														<Typography variant='body1' style={{ padding: 6 }}>{mensajes.type === 'text' ? mensajes.text :
															mensajes.type === 'audio' ? `${mensajes.sender.uid} te llamó` :
																mensajes.type === 'video' ? `${mensajes.sender.uid} te llamó` : ''}</Typography>
													</Paper>
												</ListItem>
											</Zoom>
									))}
							</List>
						</Grid>
					</Grid>
					<Grid container spacing={2} className={classes.grid}>
						<Grid item xs={12} sm={12}>
							<TextField
								autoComplete="mensaje"
								autoFocus
								className={classes.textoMensaje}
								placeholder="Escribe un mensaje..."
								required
								fullWidth
								onKeyDown={tecla}
								onChange={e => { setMensaje(e.target.value) }}
								type="text"
								variant="outlined"
							/>
						</Grid>
					</Grid>
				</Dialog>
				<Fade in={true} timeout={1000}>
					<Paper elevation={4} className={classes.root}>
						<List>
							{friends.map((lista, index) => (
								<ListItem key={index} button divider={true} onClick={() => selectFriend(lista.uid, lista.avatar)}>
									<ListItemAvatar>
										<Avatar src={lista.avatar} />
									</ListItemAvatar>
									<ListItemText primary={lista.name} secondary={`${lista.uid} - ${lista.status}`} />
								</ListItem>
							))}
						</List>
					</Paper>
				</Fade>
			</React.Fragment>
		);
	}
}